import React from "react";
import NavBar from "../components/NavBar/NavBar";
import LandingPage from "../components/LandingPage/LandingPage";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { Navigate } from "react-router-dom";

const Main = () => {
  const [user] = useAuthState(auth);
  return (
    <>
      <NavBar />
      <LandingPage />
    </>
  );
};

export default Main;
