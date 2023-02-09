import { useEffect, useState } from "react";
import { useGetData } from "../../services/hooks";
import { PokemonCard, PokemonCardProps } from "../../components/PokemonCard";
import { Container, TextInput, TextInputContainer, Title } from "./styles";
import { FlatList, Button } from "react-native";

export function NewBattle() {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [queryText, setQueryText] = useState("");

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

  function renderItem({ item }: { item: PokemonCardProps }) {
    return (
      <PokemonCard
        id={item.url.split("/")[6]}
        name={item.name}
        url={item.url}
      />
    );
  }

  return (
    <Container>
      <Title>Selecione um Pokemon</Title>
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
