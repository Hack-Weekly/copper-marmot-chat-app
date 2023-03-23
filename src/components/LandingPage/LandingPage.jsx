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
    <div className="d-flex align-items-center mx-auto h-100">
      <div className="bg-white rounded-4 px-5 py-4 d-flex flex-column flex-column justify-content-center align-items-center">
        <img
          src={require("../../img/copper_login_logo.png")}
          alt="Logo"
          className="img-fluid mx-auto mb-4"
          style={{ maxHeight: "100px" }}
        />
        <form className="text-center m-4">
          <div className="form mb-2">
            <input
              type="email"
              className="form-control rounded-pill px-3"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Email"
              style={{ backgroundColor: "#46525E" }}
            />
          </div>
          <div className="form mb-2">
            <input
              type="password"
              className="form-control rounded-pill px-3"
              id="password"
              placeholder="Password"
              style={{ backgroundColor: "#46525E" }}
            />
          </div>
          <button
            type="submit"
            className="btn border shadow rounded-4 px-5 mb-3"
          >
            Sign in
          </button>
          <p>Or</p>
          <div className="d-grid">
            <button
              className="btn btn-light rounded-pill border"
              onClick={googleSignIn}
            >
              <img
                src="https://img.icons8.com/color/16/000000/google-logo.png"
                className="me-2"
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
