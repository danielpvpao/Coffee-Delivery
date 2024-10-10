import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { defaultTheme } from "./styles/themes/default";
import { Router } from "./pages/Router";
import { CoffeeContextProvider } from "./contexts/CoffeeContext";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <CoffeeContextProvider>
            <Router />
        </CoffeeContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
