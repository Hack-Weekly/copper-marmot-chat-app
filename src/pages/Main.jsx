import React from "react";
import NavBar from "../components/NavBar/NavBar";
import LandingPage from "../components/LandingPage/LandingPage";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { ThemeProvider } from "styled-components";

const Main = () => {
  const [user] = useAuthState(auth);
  return (
    <>
      <LandingPage />
    </>
  );
};

export default Main;
