import { Container, Title } from "./styles";
import { Battle, useDataBase } from "../../services/hooks";
import { Button } from "react-native";

export function BattleCard(props: Battle) {
  return (
    <Container>
      <Title>Batalha</Title>
      <Title>{props.pokemon1}</Title>
      <Title>{props.pokemon2}</Title>
      <Title>{props.date}</Title>
    </Container>
  );
}
