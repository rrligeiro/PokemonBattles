import {
  BattleDateDisplay,
  Container,
  DateButton,
  DateButtonText,
  DateContainer,
  FightImage,
  PokemonContainer,
  PokemonName,
  PokemonSprite,
  PokemonSpriteContainer,
  PokemonTypeAndSprite,
  PokemonTypesContainer,
  ScheduleBattleButton,
  ScheduleBattleButtonText,
  Text,
} from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import React, { useEffect, useState } from "react";
import { stringifyDate } from "../../utils";
import { useDataBase, Battle, useGetData } from "../../services/hooks";
import uuid from "react-native-uuid";
import { PokemonType } from "../../components/PokemonType";
import Toast from "react-native-toast-message";

type RouteParams = {
  pokemon1: string;
  pokemon2: string;
};

export const NewBattleDate = () => {
  const navigation = useNavigation();
  const { addBattle } = useDataBase();
  const { getPokemonByName } = useGetData();
  const route = useRoute();
  const { pokemon1, pokemon2 } = route.params as RouteParams;
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState<string>("");
  const [pokemonsData, setPokemonsData] = useState<any[]>([]);

  const callGetData = async () => {
    const pokemon1Response = await getPokemonByName(pokemon1);
    const pokemon2Response = await getPokemonByName(pokemon2);
    setPokemonsData([pokemon1Response, pokemon2Response]);
  };

  useEffect(() => {
    callGetData();
  }, []);

  const onChange = (
    event: DateTimePickerEvent,
    selectedDate: Date | undefined
  ) => {
    const currentDate = selectedDate || date;
    setShow("");
    setDate(currentDate);
  };

  const handleNewBattle = async () => {
    const formatedDate = stringifyDate(date);
    const id = String(uuid.v4());
    const pokemon1Types = pokemonsData[0].types.map(
      (type: any) => type.type.name
    );
    const pokemon2Types = pokemonsData[1].types.map(
      (type: any) => type.type.name
    );
    const battle: Battle = {
      id: id,
      pokemon1: {
        id: pokemonsData[0].id,
        name: pokemon1,
        types: pokemon1Types,
      },
      pokemon2: {
        id: pokemonsData[1].id,
        name: pokemon2,
        types: pokemon2Types,
      },
      date: formatedDate,
    };
    await addBattle(battle);
    Toast.show({
      type: "success",
      position: "top",
      text1: "Batalha agendada com sucesso!",
      visibilityTime: 4000,
      autoHide: true,
      topOffset: 30,
      bottomOffset: 40,
    });
    navigation.reset({
      routes: [{ name: "Home" }, { name: "Battles" }],
      index: 1,
    });
  };

  if (pokemonsData.length === 0) {
    return <Text>Carregando...</Text>;
  } else {
    return (
      <Container>
        <PokemonContainer>
          <PokemonName>{pokemon1.toUpperCase()}</PokemonName>
          <PokemonTypeAndSprite>
            <PokemonSpriteContainer>
              <PokemonSprite
                source={{
                  uri: `${pokemonsData[0].sprites.front_default}`,
                }}
              />
            </PokemonSpriteContainer>
            <PokemonTypesContainer>
              {pokemonsData[0].types.map((type: any) => (
                <PokemonType key={type.type.name} type={type.type.name} />
              ))}
            </PokemonTypesContainer>
          </PokemonTypeAndSprite>
        </PokemonContainer>

        <FightImage source={require("../../assets/fight.png")} />

        <PokemonContainer>
          <PokemonName>{pokemon2.toUpperCase()}</PokemonName>
          <PokemonTypeAndSprite>
            <PokemonTypesContainer>
              {pokemonsData[1].types.map((type: any) => (
                <PokemonType key={type.type.name} type={type.type.name} />
              ))}
            </PokemonTypesContainer>
            <PokemonSpriteContainer>
              <PokemonSprite
                source={{
                  uri: `${pokemonsData[1].sprites.front_default}`,
                }}
              />
            </PokemonSpriteContainer>
          </PokemonTypeAndSprite>
        </PokemonContainer>

        <DateContainer>
          <DateButton
            onPress={() => setShow("date")}
            style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1.0 }]}
          >
            <DateButtonText>SELECIONAR DATA</DateButtonText>
          </DateButton>
          <DateButton
            onPress={() => setShow("time")}
            style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1.0 }]}
          >
            <DateButtonText>SELECIONAR HORA</DateButtonText>
          </DateButton>
        </DateContainer>
        <BattleDateDisplay>Data Selecionada</BattleDateDisplay>
        <BattleDateDisplay>{stringifyDate(date)}</BattleDateDisplay>
        {show == "date" && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="date"
            is24Hour={true}
            onChange={onChange}
          />
        )}
        {show == "time" && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="time"
            is24Hour={true}
            onChange={onChange}
          />
        )}
        <ScheduleBattleButton
          onPress={handleNewBattle}
          style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1.0 }]}
        >
          <ScheduleBattleButtonText>Agendar Batalha</ScheduleBattleButtonText>
        </ScheduleBattleButton>
      </Container>
    );
  }
};
