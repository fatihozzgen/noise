import { useEffect, useState } from "react";
import {
  AiFillStar,
  AiOutlineStar,
  AiFillHeart,
  AiOutlineHeart,
} from "react-icons/ai";

import { BsBasket } from "react-icons/bs";
import { getFirebaseData } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../redux/products/productSlice";
import { setFavorite } from "../redux/favorite/favoriteSlice";
import { setBasket } from "../redux/basket/basketSlice";
import { Link } from "react-router-dom";

function Favorite() {
  const items = useSelector((state) => state.products.items);
  const favorite = useSelector((state) => state.favorite.items);
  const basket = useSelector((state) => state.basket.items);
  const [menProducts, setMenProducts] = useState([]);

  const dispatch = useDispatch();

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
                <div className="btn-container">
                  <div
                    className="fav-btn"
                    onClick={() => {
                      const index = favorite.indexOf(res);
                      if (index !== -1) {
                        const newFav = [...favorite];
                        newFav.splice(index, 1);
                        dispatch(setFavorite(newFav));
                      } else {
                        dispatch(setFavorite([...favorite, res]));
                      }
                    }}
                  >
                    {favorite.find((item) => item.id === res.id) ? (
                      <AiFillHeart color="#e84118" />
                    ) : (
                      <AiOutlineHeart />
                    )}
                  </div>
                  <div
                    onClick={() => {
                      const index = basket.indexOf(res);
                      if (index !== -1) {
                        const newBasket = [...basket];
                        newBasket.splice(index, 1);
                        dispatch(setBasket(newBasket));
                      } else {
                        dispatch(setBasket([...basket, res]));
                      }
                    }}
                  >
                    {basket.find((item) => item.id === res.id) ? (
                      <BsBasket color="#e84118" />
                    ) : (
                      <BsBasket />
                    )}
                  </div>
                </div>
              </div>

              <div className="card-bottom">

                <div className="card-title"><Link to={`/${res.id}`} replace>
                  {shortName(res.name)} 
                  </Link>
                  </div>

                <div className="card-stars">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiOutlineStar />
                </div>
                <div className="card-price">{res.price + "TL"}</div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Favorite;
