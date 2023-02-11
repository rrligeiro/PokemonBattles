import { createNativeStackNavigator } from "@react-navigation/native-stack";
const { Navigator, Screen } = createNativeStackNavigator();

import { Home } from "../screens/Home";
import { Battles } from "../screens/Battles";
import { NewBattle } from "../screens/NewBattle";
import { NewBattleDate } from "../screens/NewBattleDate";

export function StackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen
        name="Battles"
        component={Battles}
        options={{
          headerShown: true,
          headerTitle: "Batalhas Agendadas",
          headerTitleStyle: {
            color: "#000000",
            fontSize: 22,
            fontWeight: "bold",
          },
          headerStyle: {
            backgroundColor: "#ffffff",
          },
          headerTintColor: "#000000",
        }}
      />
      <Screen
        name="NewBattle"
        component={NewBattle}
        options={{
          headerShown: true,
          headerTitle: "Seleção de Pokémons",
          headerTitleStyle: {
            color: "#000000",
            fontSize: 22,
            fontWeight: "bold",
          },
          headerStyle: {
            backgroundColor: "#ffffff",
          },
          headerTintColor: "#000000",
        }}
      />
      <Screen
        name="NewBattleDate"
        component={NewBattleDate}
        options={{
          headerShown: true,
          headerTitle: "Data da batalha",
          headerTitleStyle: {
            color: "#000000",
            fontSize: 22,
            fontWeight: "bold",
          },
          headerStyle: {
            backgroundColor: "#ffffff",
          },
          headerTintColor: "#000000",
        }}
      />
    </Navigator>
  );
}
