import { useEffect, useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { getFirebaseData } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../redux/products/productSlice";

function Women() {
  const items = useSelector((state) => state.products.items);
  const [menProducts, setMenProducts] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    getFirebaseData().then((res) => {
      dispatch(setItems(res));
      setMenProducts(items.filter((item) => item.topCategory === "women"));
    });
  }, [dispatch]);

  return (
    <div className="women">
      {items &&
        menProducts.map((res) => {
          return (
            <div className="card-container" key={res.id}>
              <div className="card-img">
                <img src={res.img} />
              </div>
              <div className="card-bottom">
                <div className="card-title">
                  Coool Relax Fit Crop Triko Kazak
                </div>
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

export default Women;
