import { useEffect, useState } from "react";
import { useGetData } from "../../services/hooks";
import { PokemonCard, PokemonCardProps } from "../../components/PokemonCard";
import {
  Container,
  ScheduleBattle,
  ScheduleBattleText,
  TextInput,
  TextInputContainer,
  Title,
} from "./styles";
import { FlatList, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Toast from "react-native-toast-message";

export const NewBattle = () => {
  const navigation = useNavigation();
  const { getPokemons } = useGetData();

  const [pokemons, setPokemons] = useState<PokemonCardProps[]>([]);
  const [filteredPokemons, setFilteredPokemons] = useState<PokemonCardProps[]>(
    []
  );
  const [selectedPokemons, setSelectedPokemons] = useState<PokemonCardProps[]>(
    []
  );
  const [queryText, setQueryText] = useState("");

  const callGetData = async () => {
    const pokemonResponse = await getPokemons();
    setFilteredPokemons(pokemonResponse.results);
    setPokemons(pokemonResponse.results);
  };

  useEffect(() => {
    callGetData();
  }, []);

  const handleSearch = (queryText: string) => {
    setQueryText(queryText);
    let copyPokemons = [...pokemons];
    queryText = queryText.toLowerCase();
    setFilteredPokemons(
      copyPokemons.filter((pokemon: PokemonCardProps) =>
        pokemon.name.includes(queryText)
      )
    );
  };

  const handleSelectPokemon = (pokemon: PokemonCardProps) => {
    if (selectedPokemons.length === 0) {
      setSelectedPokemons([pokemon]);
    } else if (
      selectedPokemons.length === 1 &&
      selectedPokemons[0].name !== pokemon.name
    ) {
      setSelectedPokemons([...selectedPokemons, pokemon]);
    } else if (
      selectedPokemons.length === 1 &&
      selectedPokemons[0].name === pokemon.name
    ) {
      Toast.show({
        type: "error",
        text1: "Não é possível selecionar o mesmo pokemon",
        visibilityTime: 3000,
      });
    } else if (selectedPokemons.length === 2) {
      Toast.show({
        type: "error",
        text1: "Você já selecionou dois pokemons",
        text2: "Clique em um dos pokemons para deselecionar",
        visibilityTime: 3000,
      });
    }
  };

  const renderItem = ({ item }: { item: PokemonCardProps }) => {
    return (
      <Pressable
        onPress={() => handleSelectPokemon(item)}
        style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1.0 }]}
      >
        <PokemonCard
          id={item.url.split("/")[6]}
          name={item.name}
          url={item.url}
        />
      </Pressable>
    );
  };

  return (
    <Container>
      {selectedPokemons.length > 0 ? (
        <Pressable
          onPress={() =>
            selectedPokemons.length > 1
              ? setSelectedPokemons([selectedPokemons[1]])
              : setSelectedPokemons([])
          }
          style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1.0 }]}
        >
          <Title>Primeiro Pokemon selecionado</Title>
          <PokemonCard
            id={selectedPokemons[0].url.split("/")[6]}
            name={selectedPokemons[0].name}
            url={selectedPokemons[0].url}
          />
        </Pressable>
      ) : null}
      {selectedPokemons.length == 1 && (
        <Title>Selecione o segundo Pokemon</Title>
      )}
      {selectedPokemons.length > 1 ? (
        <Pressable
          onPress={() => setSelectedPokemons([selectedPokemons[0]])}
          style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1.0 }]}
        >
          <Title>Segundo Pokemon selecionado</Title>
          <PokemonCard
            id={selectedPokemons[1].url.split("/")[6]}
            name={selectedPokemons[1].name}
            url={selectedPokemons[1].url}
          />
        </Pressable>
      ) : null}
      {selectedPokemons.length === 2 ? (
        <ScheduleBattle
          onPress={() => {
            navigation.navigate("NewBattleDate", {
              pokemon1: selectedPokemons[0].name,
              pokemon2: selectedPokemons[1].name,
            });
          }}
          style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1.0 }]}
        >
          <ScheduleBattleText>Agendar Batalha</ScheduleBattleText>
        </ScheduleBattle>
      ) : null}
      <TextInputContainer>
        <Ionicons name="search" size={24} color="#000" />
        <TextInput
          placeholder={"Busque um pokemon"}
          value={queryText}
          autoCapitalize="none"
          onChangeText={(queryText) => handleSearch(queryText)}
        />
      </TextInputContainer>
      {filteredPokemons.length === 0 && (
        <Title>Nenhum pokemon com esse nome foi encontrado</Title>
      )}
      <FlatList
        data={filteredPokemons}
        keyExtractor={(item: PokemonCardProps) => item.name}
        renderItem={renderItem}
      />
    </Container>
  );
};
