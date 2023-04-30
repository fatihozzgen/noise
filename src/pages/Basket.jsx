import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { RiDeleteBin5Line } from "react-icons/ri";
import { VscDiffAdded, VscDiffRemoved } from "react-icons/vsc";
import { setBasket } from "../redux/basket/basketSlice";
import { useDispatch, useSelector } from "react-redux";
import { setFavorite } from "../redux/favorite/favoriteSlice";
import { Link } from "react-router-dom";

function Basket() {
  const basket = useSelector((state) => state.basket.items);
  const favorite = useSelector((state) => state.favorite.items);
  const dispatch = useDispatch();

  let totalPrice = 0;
  basket.forEach((item) => {
    totalPrice += item.price * item.quantity;
  });

  totalPrice = Math.round(totalPrice * 100) / 100;

  const shortName = (name) => {
    return name
      ? name.length > 35
        ? name.substring(0, 28) + "..."
        : name
      : "";
  };
  const removeCard = (id) => {
    dispatch(setBasket([...basket.filter((item) => item.id !== id)]));
    console.log("deleted");
  };

  const increaseQuantity = (itemId) => {
    const updatedBasket = basket.map((item) => {
      const newItem = { ...item };
      if (item.id === itemId) {
        newItem.quantity += 1;
      }
      return newItem;
    });
    setBasket(updatedBasket);
  };

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
                    <Link  className="basket-name" to={`/${res.id}`} replace>
                      <div>{shortName(res.name)}</div>
</Link>

                      <div className="delete-fav">
                        <div onClick={() => removeCard(res?.id)}>
                          <RiDeleteBin5Line />
                          Remove item
                        </div>
                        <div
                          className="delete-fav"
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
                            <div>
                              <AiFillHeart color="#e84118" />
                              Move to favorite
                            </div>
                          ) : (
                            <div>
                              <AiOutlineHeart />
                              Move to favorite
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="basket-color">Dark blue</div>
                  <div className="basket-color">M</div>
                  <div className="basket-amount">
                    <div
                      className="amount-svg increase"
                      onClick={() => increaseQuantity(res.id)}
                    >
                      <VscDiffAdded />
                    </div>
                    <div> {res.quantity}</div>
                    <div className="amount-svg decrease ">
                      <VscDiffRemoved />
                    </div>
                  </div>
                  <div className="basket-price">{"$" + res.price}</div>
                </div>
              );
            })}
        </div>

        <div className="basket-summary">
          <div className="summary-header"> Summary</div>
          <div className="summary-prices">
            <div>
              Total products: <span>{totalPrice} $</span>
            </div>
            <div>
              Shipping costs: <span>Free</span>
            </div>
            <div style={{ fontWeight: "bold", cursor: "pointer" }}>
              Add promocode
            </div>
          </div>

          <div className="total-price">
            Total: <span>{totalPrice} $</span>
          </div>
          <button className="checkout-btn">CHECKOUT</button>
        </div>
      </div>
    </>
  );
}

export default Basket;
