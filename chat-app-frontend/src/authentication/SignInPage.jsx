import { useState } from "react";
import logo from "./../../src/logo.webp";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const onClickSignIn = async (e) => {
    try {
      e.preventDefault();
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (e) {
      console.log(e);
      setError("Incorrect username or password");
    }
  };

  return (
    <div className="container">
      <img
        src={logo}
        alt="ChitChat App logo"
        style={{
          height: 200,
          width: 200,
          margin: "auto",
          display: "block",
        }}
      />
      <h1
        style={{
          fontWeight: 150,
          textAlign: "center",
        }}
      >
        Sign in to ChitChat
      </h1>
      {error ? (
        <div
          className="alert alert-danger"
          style={{
            width: 400,
            height: 60,
            margin: "auto",
            textAlign: "center",
          }}
        >
          <p>{error}</p>
        </div>
      ) : null}
      <div
        className="card mt-5"
        style={{
          width: 400,
          margin: "auto",
          borderColor: "hsla(210,18%,87%,1)",
          backgroundColor: "#f6f8fa",
        }}
      >
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                className="form-control mt-2"
                id="email"
                placeholder="Enter email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="password">Password</label>
              <input
                className="form-control mt-2"
                type="password"
                id="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              className="btn btn-success form-control mt-4"
              onClick={onClickSignIn}
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
