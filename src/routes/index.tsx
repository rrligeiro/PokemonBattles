import { createNativeStackNavigator } from "@react-navigation/native-stack";
const { Navigator, Screen } = createNativeStackNavigator();

import { Home } from "../screens/Home";
import { Battles } from "../screens/Battles";
import { NewBattle } from "../screens/NewBattle";

export function StackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="Battles" component={Battles} />
      <Screen name="NewBattle" component={NewBattle} />
    </Navigator>
  );
}
