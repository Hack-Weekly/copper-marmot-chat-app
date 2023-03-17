import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import NavBar from "../components/NavBar/NavBar";
import { Navigate } from "react-router-dom";

const ChatBox = () => {
  return (
    <>
      <NavBar />
      <p>ChatBox</p>
    </>
  );
};

export default ChatBox;
