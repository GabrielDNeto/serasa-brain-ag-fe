import { RouterProvider } from "react-router";
import { GlobalStyle } from "./styles/global";
import { ROUTER } from "./config/routes/router";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <RouterProvider router={ROUTER} />
      </ThemeProvider>
    </>
  );
}

export default App;
