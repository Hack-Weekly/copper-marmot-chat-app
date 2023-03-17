import "./App.css";
import { GlobalStyle } from "./App.styled";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Main from "./pages/Main";
import ChatBox from "./pages/ChatBox";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";

function App() {
  const [user] = useAuthState(auth);
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/chat" element={<ChatBox />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
