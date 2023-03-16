import logo from "./logo.svg";
import "./App.css";
import { GlobalStyle } from "./App.styled";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
