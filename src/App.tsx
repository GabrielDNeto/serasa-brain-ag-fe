import { RouterProvider } from "react-router";
import { GlobalStyle } from "./styles/global";
import { ROUTER } from "./config/routes/router";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { AuthProvider } from "./contexts/auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConfigProvider } from "antd";
import { themeConfig } from "./styles/antd.config";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <ConfigProvider theme={themeConfig}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <AuthProvider>
            <QueryClientProvider client={queryClient}>
              <RouterProvider router={ROUTER} />
            </QueryClientProvider>
          </AuthProvider>
        </ThemeProvider>
      </ConfigProvider>
    </>
  );
}

export default App;
