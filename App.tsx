import { Routes } from "./src/routes/stack.routes";
import Toast from "react-native-toast-message";
import { ThemeProvider } from "styled-components";
import theme from "./src/theme/theme";
import {
  useFonts,
  SourceSansPro_400Regular,
  SourceSansPro_700Bold,
  SourceSansPro_900Black,
} from "@expo-google-fonts/source-sans-pro";

export default function App() {
  let [fontsLoaded] = useFonts({
    SourceSansPro_400Regular,
    SourceSansPro_700Bold,
    SourceSansPro_900Black,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes />
        <Toast />
      </ThemeProvider>
    </>
  );
}
