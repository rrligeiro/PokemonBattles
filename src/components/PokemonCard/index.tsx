import { Container, Title, Image } from "./styles";

export interface PokemonCardProps {
  id: string;
  name: string;
  url: string;
}

export function PokemonCard(props: PokemonCardProps) {
  return (
    <Container>
      <Image
        source={{
          uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`,
        }}
      />
      <Title>{props.name}</Title>
      {/* infobutton */}
    </Container>
  );
}
