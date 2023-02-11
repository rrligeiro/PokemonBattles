import { useEffect, useState } from "react";
import { FlatList, Pressable } from "react-native";
import { BattleCard } from "../../components/BattleCard";
import { useDataBase, Battle } from "../../services/hooks";
import { Container, Title } from "./styles";

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
    callGetBattles();
  };

  const renderItem = ({ item }: { item: Battle }) => {
    return (
      <Pressable
        onPress={() => {
          handleDeleteBattle(item);
        }}
      >
        <BattleCard {...item} />
      </Pressable>
    );
  };

  return (
    <Container>
      <Title>Battles</Title>
      <FlatList
        data={battles}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </Container>
  );
};
