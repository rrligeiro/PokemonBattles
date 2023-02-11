import {
  Container,
  ImageContainer,
  TypeContainer,
  TypeImage,
  TypeName,
} from "./styles";
import TypeImagePNG from "../../assets/pokemontypes";
import theme from "../../theme/theme";
import { ImageComponent } from "react-native";

export interface PokemonTypeProps {
  type: string;
}

export const PokemonType = (props: PokemonTypeProps) => {
  const typeColor =
    theme.COLORS[props.type.toUpperCase() as keyof typeof theme.COLORS];

  return (
    <Container style={{ backgroundColor: typeColor }}>
      <ImageContainer>
        <TypeImage
          source={TypeImagePNG[props.type as keyof typeof TypeImagePNG]}
        />
      </ImageContainer>
      <TypeContainer>
        <TypeName>{props.type.toUpperCase()}</TypeName>
      </TypeContainer>
    </Container>
  );
};
