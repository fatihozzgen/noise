import React from "react";
import "../style/navbar.css";
import { BiSearchAlt2 } from "react-icons/bi";
import { MdFavoriteBorder } from "react-icons/md";
import { BsBasket } from "react-icons/bs";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-logo"> NOISE</div>

      <div className="navigation">
        <div> HOME</div>
        <div> MEN'S</div>
        <div> WOMEN'S</div>
        <div> KID'S</div>
        <div> ACCESSORIES</div>
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
