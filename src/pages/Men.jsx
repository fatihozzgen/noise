import { useEffect, useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { getFirebaseData } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../redux/products/productSlice";
import { setFavorite } from "../redux/favorite/favoriteSlice";

function Men() {
  const items = useSelector((state) => state.products.items);
  const favorite = useSelector((state) => state.favorite.items);
  const [menProducts, setMenProducts] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    getFirebaseData().then((res) => {
      dispatch(setItems(res));
      setMenProducts(items.filter((item) => item.topCategory === "men"));
    });
  }, [dispatch]);

  const shortName = (name) => {
    return name
      ? name.length > 35
        ? name.substring(0, 35) + "..."
        : name
      : "";
  };
  console.log(favorite);

  return (
    <div className="women">
      {menProducts &&
        menProducts.map((res) => {
          return (
            <div className="card-container" key={res.id}>
              <div className="card-img">
                <img src={res.img} />
                <div
                  className="fav-btn"
                  onClick={() => dispatch(setFavorite([...favorite, res]))}
                >
                  <MdOutlineFavoriteBorder />
                </div>
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

export default Men;
