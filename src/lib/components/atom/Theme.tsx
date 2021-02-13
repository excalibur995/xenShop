import React from "react";
import { ThemeProvider } from "styled-components";
import { AppsTheme } from "../../shared/helpers/styledTools";

interface ThemeConfig {
  children: React.ReactNode;
}

const ThemeConsume = ({ children }: ThemeConfig) => (
  <ThemeProvider theme={AppsTheme}>{children}</ThemeProvider>
);

export default ThemeConsume;
