import React from "react";
import { NavBarStyled } from "./NavBar.styled";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [user] = useAuthState(auth);
  const signOut = () => {
    auth.signOut();
  };
  return (
    <NavBarStyled className="nav-bar">
      <Link to="/">
        <h1>React Chat</h1>
      </Link>
      <div>
        {user ? <Link to="/chat">Chat</Link> : null}
        <button onClick={signOut}>Sign Out</button>
      </div>
    </NavBarStyled>
  );
};

export default NavBar;
