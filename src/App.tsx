import { RouterProvider } from "react-router";
import { GlobalStyle } from "./styles/global";
import { ROUTER } from "./config/routes/router";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { AuthProvider } from "./contexts/auth";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AuthProvider>
          <RouterProvider router={ROUTER} />
        </AuthProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
