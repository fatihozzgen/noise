import React, { useState } from "react";
import "../style/navbar.css";
import { BiSearchAlt2 } from "react-icons/bi";
import { MdFavoriteBorder } from "react-icons/md";
import { BsBasket } from "react-icons/bs";
import { Link } from "react-router-dom";

function Navbar() {
  const [input, setinput] = useState(true);
  console.log(input);
  return (
    <div className="navbar">
      <Link className="nav-logo" to="/">
        NOISE
      </Link>

      <div className="navigation">
        <Link to="/">Home </Link>
        <Link to="women">WOMEN'S </Link>
        <Link to="men">MEN'S </Link>
        <Link to="kid">KID'S </Link>
        <Link to="accessories">ACCESSORIES </Link>
      </div>

      <div className="nav-right-side">
        <div className="log-reg">
          <Link to="login">Log in/ </Link>
          <Link to="register">Register </Link>
        </div>
        <input
          className={input ? "offinput" : "nav-input"}
          placeholder="Search"
        />

        <BiSearchAlt2
          onClick={() => {
            setinput(!input);
          }}
        />

        <Link to="favorites">
          <MdFavoriteBorder />
        </Link>

        <Link to="basket">
          <BsBasket />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
