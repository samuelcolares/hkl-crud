import React from "react";
import theme from "../theme/mui-theme-for-tailwind";
import { StyledEngineProvider, ThemeProvider } from "@mui/material";

const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledEngineProvider>
  );
};

export default GlobalProvider;
