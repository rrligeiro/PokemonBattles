import { useNavigation } from "@react-navigation/native";

import { BattleCard } from "../../components/BattleCard";
import {
  BattlesButton,
  ButtonsContainer,
  Container,
  Header,
  NewBattleButton,
  NextBattleContainer,
  NextBattleText,
  PokeballImg,
  PokemonTitle,
} from "./styles";

import pokeball from "../../assets/pokeball.png";
import tittle from "../../assets/tittle.png";

export function Home() {
  const navigation = useNavigation();

  return (
    <Container>
      <Header>
        <PokemonTitle source={tittle} />
        <PokeballImg source={pokeball} />
      </Header>

      <NextBattleContainer>
        <NextBattleText>Próxima Batalha</NextBattleText>
        {/* <BattleCard /> */}
      </NextBattleContainer>

      <ButtonsContainer>
        <NewBattleButton
          onPress={() => {
            navigation.navigate("NewBattle");
          }}
        >
          <NextBattleText>Agendar Batalha</NextBattleText>
        </NewBattleButton>
        <BattlesButton onPress={() => navigation.navigate("Battles")}>
          <NextBattleText>Próximas Batalhas</NextBattleText>
        </BattlesButton>
      </ButtonsContainer>
    </Container>
  );
}
