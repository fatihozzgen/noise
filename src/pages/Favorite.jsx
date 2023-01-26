import { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

function Favorite() {
  const favorite = useSelector((state) => state.favorite.items);

  const shortName = (name) => {
    return name
      ? name.length > 35
        ? name.substring(0, 35) + "..."
        : name
      : "";
  };
  return (
    <div className="women">
      {favorite &&
        favorite.map((res) => {
          return (
            <div className="card-container" key={res.id}>
              <div className="card-img">
                <img src={res.img} />
              </div>
              <div className="card-bottom">
                <div className="card-title">{shortName(res.name)} </div>
                <div className="card-stars">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiOutlineStar />
                </div>
                <div className="card-price">249,99 TL</div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Favorite;
