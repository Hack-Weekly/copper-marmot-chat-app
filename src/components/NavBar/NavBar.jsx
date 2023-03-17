import React from "react";
import { NavBarStyled } from "./NavBar.styled";
import GoogleSignin from "../../img/btn_google_signin_dark_normal_web.png";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [user] = useAuthState(auth);
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };
  const signOut = () => {
    auth.signOut();
  };
  return (
    <NavBarStyled className="nav-bar">
      <Link to="/">
        <h1>React Chat</h1>
      </Link>
      {user ? <Link to="/chat">Chat</Link> : null}
    </NavBarStyled>
  );
};

export default NavBar;
