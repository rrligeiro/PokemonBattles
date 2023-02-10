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
import { FlatList, Button, Pressable } from "react-native";

export function NewBattle() {
  const [pokemons, setPokemons] = useState<PokemonCardProps[]>([]);
  const [filteredPokemons, setFilteredPokemons] = useState<PokemonCardProps[]>(
    []
  );
  const [queryText, setQueryText] = useState("");
  const [selectedPokemons, setSelectedPokemons] = useState<PokemonCardProps[]>(
    []
  );

  const { getPokemons } = useGetData();

  const callGetData = async () => {
    const pokemonResponse = await getPokemons();
    setFilteredPokemons(pokemonResponse.results);
    setPokemons(pokemonResponse.results);
  };

  useEffect(() => {
    callGetData();
  }, []);

  function handleSearch(queryText: string) {
    setQueryText(queryText);
    let copyPokemons = [...pokemons];
    queryText = queryText.toLowerCase();
    setFilteredPokemons(
      copyPokemons.filter((pokemon: PokemonCardProps) =>
        pokemon.name.includes(queryText)
      )
    );
  }

  const handleSelectPokemon = (pokemon: PokemonCardProps) => {
    if (selectedPokemons.length === 0) {
      setSelectedPokemons([pokemon]);
    } else if (
      selectedPokemons.length === 1 &&
      selectedPokemons[0].name !== pokemon.name
    ) {
      setSelectedPokemons([...selectedPokemons, pokemon]);
    }
    console.log(selectedPokemons);
  };

  function renderItem({ item }: { item: PokemonCardProps }) {
    return (
      <Pressable onPress={() => handleSelectPokemon(item)}>
        <PokemonCard
          id={item.url.split("/")[6]}
          name={item.name}
          url={item.url}
        />
      </Pressable>
    );
  }

  return (
    <Container>
      {selectedPokemons.length > 0 ? (
        <Pressable
          onPress={() =>
            selectedPokemons.length > 1
              ? setSelectedPokemons([selectedPokemons[1]])
              : setSelectedPokemons([])
          }
        >
          <Title>Pokemon Selecionado</Title>
          <PokemonCard
            id={selectedPokemons[0].url.split("/")[6]}
            name={selectedPokemons[0].name}
            url={selectedPokemons[0].url}
          />
        </Pressable>
      ) : null}
      {selectedPokemons.length === 0 ? (
        <Title>Selecione um Pokemon</Title>
      ) : (
        <Title>Selecione o segundo</Title>
      )}
      {selectedPokemons.length > 1 ? (
        <Pressable onPress={() => setSelectedPokemons([selectedPokemons[0]])}>
          <Title> Pokemon Selecionado</Title>
          <PokemonCard
            id={selectedPokemons[1].url.split("/")[6]}
            name={selectedPokemons[1].name}
            url={selectedPokemons[1].url}
          />
        </Pressable>
      ) : null}
      {selectedPokemons.length === 2 ? (
        <ScheduleBattle>
          <ScheduleBattleText>Agendar Batalha</ScheduleBattleText>
        </ScheduleBattle>
      ) : null}
      <TextInputContainer>
        <TextInput
          placeholder={"Busque um pokemon"}
          value={queryText}
          autoCapitalize="none"
          onChangeText={(queryText) => handleSearch(queryText)}
        />
      </TextInputContainer>
      <FlatList
        data={filteredPokemons}
        keyExtractor={(item: PokemonCardProps) => item.name}
        renderItem={renderItem}
      />
      <Button title="OI" />
    </Container>
  );
}
