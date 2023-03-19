import React from "react";
import LandingPage from "../components/LandingPage/LandingPage";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Main = () => {
  const [user] = useAuthState(auth);
  return (
    <>
      <LandingPage />
    </>
  );
};

export default Main;
