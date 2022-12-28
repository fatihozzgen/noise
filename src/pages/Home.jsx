import React from "react";
import "../style/home.css";
import Women from "../images/women.jpg";
import Men from "../images/men.jpg";
import Kid from "../images/kid.jpg";
import Acc from "../images/accessories.jpg";

function home() {
  return (
    <div className="home">
      <div className="home-images">
        <div className="box1">
          <img src={Women} />
        </div>

        <div className="box2">
          <img src={Men} />
        </div>
        <div
          className="box34"
          style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}
        >
          <div className="box3">
            <img src={Kid} />
          </div>
          <div className="box4">
            <img src={Acc} />
          </div>
        </div>
      </div>

      <div className="home-navigation">
        <div className="new-product"> NEW PRODUCT</div>

        <div className="">
          <div> HOME</div>
          <div> MEN'S</div>
          <div> WOMEN'S</div>
          <div> KID'S</div>
          <div> ACCESSORIES</div>
        </div>
      </div>
    </div>
  );
}

export default home;
