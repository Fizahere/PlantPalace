import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import theme from "./assets/theme/theme.js";

createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={theme}>
    <ColorModeProvider
      options={{ initialColorMode: "light", useSystemColorMode: false }}
    >
      <App />
    </ColorModeProvider>
  </ChakraProvider>
);
