import { BattleCard } from "../../components/BattleCard";
import { GenericButton } from "../../components/GenericButton";
import {
  ButtonsContainer,
  Container,
  NextBattleContainer,
  NextBattleText,
  Title,
} from "./styles";

export function Home() {
  return (
    <Container>
      <Title>Pokemon{"\n"}Battles</Title>

      <NextBattleContainer>
        <NextBattleText>Próxima Batalha</NextBattleText>
        <BattleCard />
      </NextBattleContainer>

      <ButtonsContainer>
        <GenericButton />
        <GenericButton />
      </ButtonsContainer>
    </Container>
  );
}
