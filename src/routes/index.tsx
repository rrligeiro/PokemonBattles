import { createNativeStackNavigator } from "@react-navigation/native-stack";
const { Navigator, Screen } = createNativeStackNavigator();

import { Home } from "../screens/Home";
import { Battles } from "../screens/Battles";

export function StackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: "transparent",
        },
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="Battles" component={Battles} />
    </Navigator>
  );
}
