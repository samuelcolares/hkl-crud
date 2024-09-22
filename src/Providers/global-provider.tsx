import React from "react";
import theme from "../theme/mui-theme-for-tailwind";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import { StoreProvider } from "./store-provider";

// Create a client
const queryClient = new QueryClient();

const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <StoreProvider>{children}</StoreProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default GlobalProvider;
