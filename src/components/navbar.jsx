import React, { useState } from "react";
import "../style/navbar.css";
import { BiSearchAlt2 } from "react-icons/bi";
import { MdFavoriteBorder } from "react-icons/md";
import { BsBasket } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function Navbar() {
  const user = useSelector((state) => state.user);

  return (
    <div className="navbar">
      <Link className="nav-logo" to="/">
        NOISE
      </Link>

      <div className="navigation">
        <Link to="/">HOME </Link>
        <Link to="women">WOMEN'S </Link>
        <Link to="men">MEN'S </Link>
        <Link to="kid">KID'S </Link>
        <Link to="accessories">ACCESSORIES </Link>
      </div>

      <div className="nav-right-side">
        <BiSearchAlt2 className="searchicon" />
        <input className={"nav-input"} placeholder="Search" />

        <Link to="favorites">
          <MdFavoriteBorder />
        </Link>

        <Link to="basket">
          <BsBasket />
        </Link>

        <Link to={user ? "" : "login"}>
          <VscAccount />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
