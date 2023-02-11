import { Container, Title } from "./styles";
import { Battle, useDataBase } from "../../services/hooks";
import { Button } from "react-native";

export const BattleCard = (props: Battle) => {
  return (
    <Container>
      <Title>Batalha</Title>
      <Title>{props.pokemon1.name}</Title>
      <Title>{props.pokemon2.name}</Title>
      <Title>{props.date}</Title>
    </Container>
  );
};
