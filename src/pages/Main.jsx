import React from "react";
import LandingPage from "../components/LandingPage/LandingPage";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Dashboard from "../components/Dashboard/Dashboard";
import { useEffect } from 'react';
import  NavBar  from '../components/NavBar/NavBar';

const Main = () => {
  const [user] = useAuthState(auth);

  return (
    <>
      {user ? <Dashboard /> : <LandingPage />}
    </>
  );
};

export default Main;
