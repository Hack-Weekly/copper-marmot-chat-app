import React from "react";
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
    <div className="d-flex mx-auto align-self-center flex-column justify-content-center align-items-center h-100">
      <img
        src={require("../../img/copper_login_logo.png")}
        alt="Logo"
        className="img-fluid mx-auto mb-4"
        style={{ maxHeight: "100px" }}
      />
      <div className="bg-white rounded p-4">
        <form className="text-center">
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control rounded-pill"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Email"
              style={{ backgroundColor: "#C8CACF", color: "white" }}
            />
            <label htmlFor="password">Email</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control rounded-pill sm"
              id="password"
              placeholder="Password"
              style={{ backgroundColor: "#C8CACF", color: "white" }}
            />
            <label htmlFor="password">Password</label>
          </div>
          <button
            type="submit"
            className="btn btn-primary rounded-pill px-4 mb-3"
          >
            Sign in
          </button>
          <p>Or</p>
          <div class="d-grid">
            <button class="btn btn-light" onClick={googleSignIn}>
              <img
                src="https://img.icons8.com/color/16/000000/google-logo.png"
                class="me-2"
                alt="Google Logo"
              />
              Continue with Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LandingPage;
