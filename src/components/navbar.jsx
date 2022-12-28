import React from "react";
import "../style/navbar.css";
import { BiSearchAlt2 } from "react-icons/bi";
import { MdFavoriteBorder } from "react-icons/md";
import { BsBasket } from "react-icons/bs";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-logo"> NOISE</div>

      <div className="navigation">
        <Link to="/">Home </Link>
        <Link to="women">WOMEN'S </Link>
        <Link to="men">MEN'S </Link>
        <Link to="kid">KID'S </Link>
        <Link to="accessories">ACCESSORIES </Link>

        <div> </div>
        <div> </div>
        <div> </div>
        <div> </div>
      </div>

      <div className="nav-right-side">
        <div className="log-reg">Log in/Register</div>
        <BiSearchAlt2 />
        <MdFavoriteBorder />
        <BsBasket />
      </div>
    </div>
  );
}

export default Navbar;
