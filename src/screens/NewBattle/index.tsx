import { useEffect, useState } from "react";
import { useGetData } from "../../services/hooks";
import { PokemonCard, PokemonCardProps } from "../../components/PokemonCard";
import { Container, Title } from "./styles";
import { FlatList } from "react-native";

export function NewBattle() {
  const [pokemons, setPokemons] = useState([]);

  const { getPokemons } = useGetData();

  const callGetData = async () => {
    const pokemonResponse = await getPokemons();
    setPokemons(pokemonResponse.results);
  };

  useEffect(() => {
    callGetData();
  }, []);

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
      <FlatList
        data={pokemons}
        keyExtractor={(item: PokemonCardProps) => item.name}
        renderItem={renderItem}
      />
    </Container>
  );
}
