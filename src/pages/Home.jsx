import React, { useEffect, useState } from "react";
import "../style/home.css";
import Women from "../images/women.jpg";
import Men from "../images/men.jpg";
import Kid from "../images/kid.jpg";
import Acc from "../images/accessories.jpg";
import { Link } from "react-router-dom";
import { getFirebaseData } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../redux/products/productSlice";

function Home() {
  const items = useSelector((state) => state.products.items);

  const dispatch = useDispatch();

  useEffect(() => {
    getFirebaseData().then((res) => {
      dispatch(setItems(res));
    });
  }, [dispatch]);
  console.log(items.filter((item) => item.category === "girl"));
  return (
    <div className="home">
      <div className="home-images">
        <Link to="women" className="box1">
          <img src={Women} />
        </Link>

        <Link to="men" className="box2">
          <img src={Men} />
        </Link>
        <div
          className="box34"
          style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}
        >
          <Link to="kid" className="box3">
            <img src={Kid} />
          </Link>
          <Link to="accessories" className="box4">
            <img src={Acc} />
          </Link>
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
      <h1>items</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {items &&
          items.map((res) => {
            return (
              <img
                key={res.id}
                style={{ width: "200px", height: "300px" }}
                src={res.img}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Home;
