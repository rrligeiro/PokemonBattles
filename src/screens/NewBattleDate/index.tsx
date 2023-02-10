import { BattleCard } from "../../components/BattleCard";
import { Container, Title } from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { Button, Platform, Pressable, Text } from "react-native";
import { useState } from "react";
import { stringifyDate } from "../../utils";
import { useDataBase, Battle } from "../../services/hooks";
import uuid from "react-native-uuid";

type RouteParams = {
  pokemonId1: string;
  pokemonId2: string;
};

export function NewBattleDate() {
  const navigation = useNavigation();
  const { addBattle } = useDataBase();
  const route = useRoute();
  const { pokemonId1, pokemonId2 } = route.params as RouteParams;
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState<string>("");

  const onChange = (
    event: DateTimePickerEvent,
    selectedDate: Date | undefined
  ) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios" ? "" : "");
    setDate(currentDate);
  };

  const handleNewBattle = () => {
    const formatedDate = stringifyDate(date);
    const id = String(uuid.v4());
    const battle: Battle = {
      id: id,
      pokemon1: pokemonId1,
      pokemon2: pokemonId2,
      date: formatedDate,
    };
    addBattle(battle);
    navigation.navigate("Battles");
  };

  return (
    <Container>
      <Title>{pokemonId1}</Title>
      <Title>{pokemonId2}</Title>
      <Button onPress={() => setShow("date")} title="Selecionar Data" />
      <Button onPress={() => setShow("time")} title="Selecionar Hora" />
      <Text>Data escolhida para Dia: {stringifyDate(date)}</Text>
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
      {/* <BattleCard /> */}
      <Button onPress={handleNewBattle} title="Agendar Batalha" />
    </Container>
  );
}
