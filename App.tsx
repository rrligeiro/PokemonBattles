import { Routes } from "./src/routes/stack.routes";
import Toast from "react-native-toast-message";
import { ThemeProvider } from "styled-components";
import theme from "./src/theme/theme";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes />
        <Toast />
      </ThemeProvider>
    </>
  );
}
