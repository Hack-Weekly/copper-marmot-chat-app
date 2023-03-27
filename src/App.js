import "./App.css";
import { GlobalStyle, StyledApp } from "./App.styled";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Chat from "./pages/Chat";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledApp>
        <GlobalStyle />
        <Main />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
