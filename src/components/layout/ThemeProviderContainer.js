import React, { useState } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { darkTheme, lightTheme } from "../style/default";
import ModeSwitchButton from "../style/ModeSwitchButton";

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 10px;
    padding: 0;
    background-color: ${({ theme }) => theme.colorSet.background};
    color: ${({ theme }) => theme.colorSet.on_background};
    overflow-x: hidden;
  }
`;

const ThemeProviderContainer = ({ children, isDevMode }) => {
  const [isDarkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      {isDevMode && (
        <ModeSwitchButton isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
      )}
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviderContainer;
