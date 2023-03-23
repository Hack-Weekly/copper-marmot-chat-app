import React, { createContext, useContext, useState } from "react";
import LandingPage from "../components/LandingPage/LandingPage";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Dashboard from "../components/Dashboard/Dashboard";
import { useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";

export const UserContext = createContext(null);

const Main = () => {
  const [user] = useAuthState(auth);
  const [userDoc, setUserDoc] = useState(null);

  useEffect(() => {
    if (!user)
      return;

    getDoc(doc(db, "users", user.uid))
      .then((doc) => {
        if (doc.exists()) {
          setUserDoc(doc);
        }
      });

  }, [user]);

  return (
    <UserContext.Provider value={userDoc}>
      {/* <NavBar /> */}
      {user ? <Dashboard /> : <LandingPage />}
    </UserContext.Provider>
  );
};

export default Main;
