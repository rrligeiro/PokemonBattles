import {
  Container,
  Image,
  PokemonContainer,
  PokemonImageContainer,
  PokemonName,
} from "./styles";

export interface PokemonCardProps {
  id: string;
  name: string;
  url: string;
}

export const PokemonCard = (props: PokemonCardProps) => {
  return (
    <Container>
      <PokemonContainer>
        <PokemonImageContainer>
          <Image
            source={{
              uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`,
            }}
          />
        </PokemonImageContainer>
        <PokemonName>{props.name.toLocaleUpperCase()}</PokemonName>
      </PokemonContainer>
    </Container>
  );
};
