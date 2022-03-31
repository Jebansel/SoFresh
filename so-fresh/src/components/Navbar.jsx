import logo from "../images/logo.png";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import cartIcon from "../images/cartIcon.jpg";
import { useState } from "react";

export const Navbar = ({ cart }) => {
  console.log(cart);
  const [isCartItemDisplayed, setIsCartItemDisplayed] = useState(false);
  const totalNumberOfCartItems = cart.reduce((acc, val) => acc + val.quantitySelected, 0); //pass this to navbar along with cart

  return (
    <div className="navbar">
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
        <Link
          className="link cart-link"
          to="/cart"
          onFocus={() => setIsCartItemDisplayed(true)}
          onBlur={() => setIsCartItemDisplayed(false)}
          onMouseEnter={() => setIsCartItemDisplayed(true)}
          onMouseLeave={() => setIsCartItemDisplayed(false)}
        >
          <Badge badgeContent={totalNumberOfCartItems} color="secondary">
            <img
              className="cart-icon"
              src={cartIcon}
              alt={`your cart has ${totalNumberOfCartItems} items`}
            />
          </Badge>
          <div className="cart-popover">
            {isCartItemDisplayed &&
              cart.map((cartItem) => (
                <p key={cartItem.title} className="cart-popover-item">
                  <span>{cartItem.title}:&nbsp;</span>
                  <span>{cartItem.quantitySelected}</span>
                </p>
              ))}
          </div>
        </Link>
      </nav>
    </div>
  );
};
