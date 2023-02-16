import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getFirebaseData } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { setItems } from "../redux/products/productSlice";

function Detail() {
  const { id } = useParams();
  const items = useSelector((state) => state.products.items);

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
                <div className="detail-price">$ {res.price} </div>
                <div className="detail-desc"> {res.desc} </div>
                <div className="detail-btn-cont">
                  <button className="detail-btn"> Add to favorite</button>
                  <button className="detail-btn"> Add to bag</button>
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
