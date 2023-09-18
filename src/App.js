import React from "react";
import Router from "./route/Router";
import ThemeProviderContainer from "./components/layout/ThemeProviderContainer";

function App() {
  const isDevMode = true;
  return (
    <ThemeProviderContainer isDevMode={isDevMode}>
      <Router />
    </ThemeProviderContainer>
  );
}

export default App;
