import React from "react";
import { LandingPageStyled } from "./LandingPage.styled";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const LandingPage = () => {
  const [user] = useAuthState(auth);
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  return (
    <LandingPageStyled>
      <h1>
        Hi! Log in to start using the <span>Copper</span> <span>Marmot</span>
        &trade; chat!
      </h1>
      <button onClick={googleSignIn}>Log In</button>
    </LandingPageStyled>
  );
};

export default LandingPage;
