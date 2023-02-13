import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import Toast from "react-native-toast-message";
import { BattleCard } from "../../components/BattleCard";
import { useDataBase, Battle } from "../../services/hooks";
import { Container, Title } from "./styles";
export interface BattleCardProps extends Battle {
  handleDeleteBattle?: (battle: Battle) => void;
}

export const Battles = () => {
  const [battles, setBattles] = useState<Battle[]>([]);

  const { getBattles } = useDataBase();

  const callGetBattles = async () => {
    const battlesData = await getBattles();
    setBattles(battlesData);
  };

  useEffect(() => {
    callGetBattles();
  }, []);

  const { deleteBattle } = useDataBase();

  const handleDeleteBattle = async (battle: Battle) => {
    await deleteBattle(battle);
    Toast.show({
      type: "success",
      text1: "Batalha deletada com sucesso!",
      visibilityTime: 2000,
    });
    callGetBattles();
  };

  const renderItem = ({ item }: { item: Battle }) => {
    return <BattleCard {...item} handleDeleteBattle={handleDeleteBattle} />;
  };

  if (battles.length === 0) {
    return (
      <Container style={{ justifyContent: "center", alignItems: "center" }}>
        <Title>Você ainda não possui batalhas agendadas</Title>
      </Container>
    );
  }

  return (
    <Container>
      <FlatList
        data={battles}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </Container>
  );
};
