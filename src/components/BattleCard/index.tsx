import {
  Container,
  DateText,
  DateTextContainer,
  DeleteButton,
  DeleteButtonAndTextContainer,
  FightContainer,
  FightImage,
  PokemonName,
  PokemonSprite,
  PokemonSpriteContainer,
} from "./styles";
import theme from "../../theme/theme";
import { Ionicons } from "@expo/vector-icons";
import { BattleCardProps } from "../../screens/Battles";

export const BattleCard = (props: BattleCardProps) => {
  const pokemon1Color =
    theme.COLORS[
      props.pokemon1.types[0].toUpperCase() as keyof typeof theme.COLORS
    ];
  const pokemon2Color =
    theme.COLORS[
      props.pokemon2.types[0].toUpperCase() as keyof typeof theme.COLORS
    ];
  return (
    <Container>
      <FightContainer>
        <PokemonSpriteContainer style={{ borderColor: pokemon1Color }}>
          <PokemonSprite
            source={{
              uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.pokemon1.id}.png`,
            }}
          />
          <PokemonName>{props.pokemon1.name}</PokemonName>
        </PokemonSpriteContainer>

        <FightImage source={require("../../assets/VS.png")} />

        <PokemonSpriteContainer style={{ borderColor: pokemon2Color }}>
          <PokemonSprite
            source={{
              uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.pokemon2.id}.png`,
            }}
          />
          <PokemonName>{props.pokemon2.name}</PokemonName>
        </PokemonSpriteContainer>
      </FightContainer>
      <DeleteButtonAndTextContainer>
        <DateTextContainer>
          <DateText>Data da batalha</DateText>
          <DateText>{props.date}</DateText>
        </DateTextContainer>
        {props.handleDeleteBattle && (
          <DeleteButton onPress={() => props.handleDeleteBattle?.(props)}>
            <Ionicons name="trash" size={30} color="red" />
          </DeleteButton>
        )}
      </DeleteButtonAndTextContainer>
    </Container>
  );
};
