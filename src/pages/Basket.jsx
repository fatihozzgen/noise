import React from "react";
import Cloth2 from "../images/cloth2.jpg";

import { RiDeleteBin5Line } from "react-icons/ri";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { VscDiffAdded, VscDiffRemoved } from "react-icons/vsc";
import { setBasket } from "../redux/basket/basketSlice";
import { useDispatch, useSelector } from "react-redux";

function Basket() {
  const basket = useSelector((state) => state.basket.items);

  const shortName = (name) => {
    return name
      ? name.length > 35
        ? name.substring(0, 28) + "..."
        : name
      : "";
  };
  const dispatch = useDispatch();
  const removeCard = (id) => {
    dispatch(setBasket([...basket.filter((item) => item.id !== id)]));
    console.log("deleted");
  };
  console.log(basket);
  return (
    <>
      <div className="basket-header"> Shopping cart items</div>
      <div className="basket">
        <div className="basket-products">
          <div className="product-header">
            <div className="header-box1">Product</div>
            <div className="header-box2">
              <div>Color</div>
              <div>Size</div>
              <div>Amount</div>
              <div>Price</div>
            </div>
          </div>

          {basket &&
            basket.map((res) => {
              return (
                <div className="basket-cards" key={res.id}>
                  <div className="basket-img">
                    <img src={res.img} />
                    <div className="basket-desc">
                      <div className="basket-name">{shortName(res.name)}</div>
                      <div className="delete-fav">
                        <div onClick={() => removeCard(res?.id)}>
                          <RiDeleteBin5Line />
                          Remove item
                        </div>
                        <div>
                          <MdOutlineFavoriteBorder />
                          Move to favorite
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="basket-color">Dark blue</div>
                  <div className="basket-color">M</div>
                  <div className="basket-amount">
                    <div className="amount-svg">
                      <VscDiffAdded />
                    </div>
                    1
                    <div className="amount-svg">
                      <VscDiffRemoved />
                    </div>
                  </div>
                  <div className="basket-price">{res.price}</div>
                </div>
              );
            })}
        </div>

        <div className="basket-summary">
          <div className="summary-header"> Summary</div>
          <div className="summary-prices">
            <div>
              Total products: <span>249.99 $</span>
            </div>
            <div>
              Shipping costs: <span>Free</span>
            </div>
            <div style={{ fontWeight: "bold", cursor: "pointer" }}>
              Add promocode
            </div>
          </div>

          <div className="total-price">
            Total: <span>249.99 $</span>
          </div>
          <button className="checkout-btn">CHECKOUT</button>
        </div>
      </div>
    </>
  );
}

export default Basket;
