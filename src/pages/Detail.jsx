import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getFirebaseData } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../redux/products/productSlice";
import { setFavorite } from "../redux/favorite/favoriteSlice";
import { AiFillHeart, AiOutlineHeart, AiFillStar,AiOutlineStar } from "react-icons/ai";
import { setBasket } from "../redux/basket/basketSlice";
import { BsBasket } from "react-icons/bs";

function Detail() {
  const { id } = useParams();
  const items = useSelector((state) => state.products.items);
  const favorite = useSelector((state) => state.favorite.items);
  const basket = useSelector((state) => state.basket.items);

  const [menProducts, setMenProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getFirebaseData().then((res) => {
      dispatch(setItems(res));
      setMenProducts(items.filter((item) => item.id === id));
    });
  }, [dispatch]);

  return (
    <div>
      {menProducts.map((res) => {
        return (
          <div className="detail" key={res.id}>
            <div className="detail-container">
              <div className="detail-left-side">
                <img src={res.img} />
              </div>
              <div className="detail-right-side">
                <div className="detail-name"> {res.name} </div>
                <div className="detail-price">$ {res.price} <div className="card-stars">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                  </div> </div>
                <div className="detail-desc"> {res.desc} </div>
                <div className="detail-btn-cont">
                  <div
                    className="detail-btn"
                    onClick={() => {
                      const id = res.id;
                      const existingIndex = basket.findIndex(
                        (item) => item.id === id
                      );
                      if (existingIndex !== -1) {
                        const newBasket = [...basket];
                        newBasket.splice(existingIndex, 1);
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
                    Add to bag
                  </div>
                  <div
                    className="detail-fav-btn"
                    onClick={() => {
                      const id = res.id;
                      const existingIndex = favorite.findIndex(
                        (item) => item.id === id
                      );
                      if (existingIndex !== -1) {
                        const newFav = [...favorite];
                        newFav.splice(existingIndex, 1);
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
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Detail;
