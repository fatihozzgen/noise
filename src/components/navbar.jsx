import React, { useState } from "react";
import "../style/navbar.css";
import { BiSearchAlt2 } from "react-icons/bi";
import { MdFavoriteBorder } from "react-icons/md";
import { BsBasket } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { popupbox } from "../redux/user/userSlice";

function Navbar() {
  const { user, popup } = useSelector((state) => state.user);
  console.log(popup);
  const dispatch = useDispatch();
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

        <Link
          className="account"
          onClick={() => dispatch(popupbox(!popup))}
          to={!user && "login"}
        >
          <VscAccount />
        </Link>
        {!user && (
          <div className="popup-profile">
            <Link to="change-password"> Change your password</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
