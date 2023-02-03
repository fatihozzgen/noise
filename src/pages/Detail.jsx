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
        return <div> {res.name} </div>;
      })}
    </div>
  );
}

export default Detail;
