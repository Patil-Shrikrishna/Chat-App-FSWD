import { Link } from "react-router-dom";
import logo from "./../../src/logo.webp";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const NavBar = ({ user }) => {
  const navigate = useNavigate();
  const onSignOut = async () => {
    try {
      await signOut(getAuth());
      navigate("/sign-in");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <nav className="navbar border-bottom bg-light">
      <Link
        to="/"
        style={{
          textDecoration: "none",
        }}
      >
        <img
          src={logo}
          alt="ChitChat logo"
          style={{
            width: 50,
            height: 50,
          }}
        />
        <h5
          style={{
            color: "black",
            display: "inline",
          }}
        >
          ChitChat App
        </h5>
      </Link>
      {user ? (
        <div>
          <label className="mx-2">
            Logged in as <strong>{user.email}</strong>
          </label>
          <button className="btn btn-danger mx-2" onClick={onSignOut}>
            Sign Out
          </button>
        </div>
      ) : null}
    </nav>
  );
};
