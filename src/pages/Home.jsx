import React from "react";
import "../style/home.css";

function home() {
  return (
    <div>
      <div className="home-images">
        <div
          style={{
            backgroundColor: "#1abc9c",
            width: "13rem",
            height: "9rem",
          }}
        >
          WOMEN
        </div>

        <div
          style={{ backgroundColor: "#2ecc71", width: "8rem", height: "9rem" }}
        >
          MEN
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}
        >
          <div
            style={{
              backgroundColor: "#3498db",
              width: "9rem",
              height: "4.4rem",
            }}
          >
            KID
          </div>
          <div
            style={{
              backgroundColor: "#9b59b6",
              width: "9rem",
              height: "4.4rem",
            }}
          >
            ACCESSORIES
          </div>
        </div>
      </div>

      <div className="home-navigation">
        <div className="new-product"> NEW PRODUCT</div>

        <div className="navigation">
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
