import { useNavigation } from "@react-navigation/native";

import { BattleCard } from "../../components/BattleCard";
import {
  BattlesButton,
  BattlesButtonText,
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
import { useEffect, useState } from "react";
import { Battle, useDataBase } from "../../services/hooks";

export function Home() {
  const [battles, setBattles] = useState<Battle[]>([]);
  const { getBattles } = useDataBase();

  const callGetBattles = async () => {
    const battlesData = await getBattles();
    setBattles(battlesData);
  };

  useEffect(() => {
    callGetBattles();
  }, [battles]);

  const navigation = useNavigation();

  return (
    <Container>
      <Header>
        <PokemonTitle source={tittle} />
        <PokeballImg source={pokeball} />
      </Header>

      <NextBattleText>Próxima Batalha</NextBattleText>
      <NextBattleContainer>
        {battles.length > 0 ? (
          <BattleCard {...battles[0]} />
        ) : (
          <NextBattleText>
            Você não possui batalhas agendadas, clique no botão próximas
            batalhas para agendar uma batalha
          </NextBattleText>
        )}
      </NextBattleContainer>

      <ButtonsContainer>
        <NewBattleButton
          onPress={() => {
            navigation.navigate("NewBattle");
          }}
        >
          <BattlesButtonText>Agendar Batalha</BattlesButtonText>
        </NewBattleButton>
        <BattlesButton onPress={() => navigation.navigate("Battles")}>
          <BattlesButtonText>Próximas Batalhas</BattlesButtonText>
        </BattlesButton>
      </ButtonsContainer>
    </Container>
  );
}
