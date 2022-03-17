import logo from "../images/logo.png";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <header className="navbar">
        <div className="navbar-logo-div">
          <h1 style={{ display: "none" }}>So Fresh</h1>
          <img className="navbar-logo" src={logo} alt="" />
        </div>
        <nav className="topnav">
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/recipes">
            Recipes
          </Link>
          <Link className="link" to="/login">
            Login
          </Link>
        </nav>
      </header>
    </div>
  );
};
