import React from "react";
import Cloth2 from "../images/cloth2.jpg";

import { RiDeleteBin5Line } from "react-icons/ri";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { VscDiffAdded, VscDiffRemoved } from "react-icons/vsc";

function Basket() {
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

          <div className="basket-cards">
            <div className="basket-img">
              <img src={Cloth2} />
              <div className="basket-desc">
                <div className="basket-name">Slim Fit Jeans</div>
                <div className="delete-fav">
                  <RiDeleteBin5Line />
                  Remove item
                  <MdOutlineFavoriteBorder />
                  Move to favorite
                </div>
              </div>
            </div>
            <div className="basket-color">Dark blue</div>
            <div className="basket-color">L</div>
            <div className="basket-amount">
              <div className="amount-svg">
                <VscDiffAdded />
              </div>
              1
              <div className="amount-svg">
                <VscDiffRemoved />
              </div>
            </div>
            <div className="basket-price">249.99 $</div>
          </div>

          <div className="basket-cards">
            <div className="basket-img">
              <img src={Cloth2} />
              <div className="basket-desc">
                <div className="basket-name">Slim Fit Jeans</div>
                <div className="delete-fav">
                  <RiDeleteBin5Line />
                  Remove item
                  <MdOutlineFavoriteBorder />
                  Move to favorite
                </div>
              </div>
            </div>
            <div className="basket-color">Dark blue</div>
            <div className="basket-color">32</div>
            <div className="basket-amount">
              <div className="amount-svg">
                <VscDiffAdded />
              </div>
              1
              <div className="amount-svg">
                <VscDiffRemoved />
              </div>
            </div>
            <div className="basket-price">249.99 $</div>
          </div>

          <div className="basket-cards">
            <div className="basket-img">
              <img src={Cloth2} />
              <div className="basket-desc">
                <div className="basket-name">Slim Fit Jeans</div>
                <div className="delete-fav">
                  <RiDeleteBin5Line />
                  Remove item
                  <MdOutlineFavoriteBorder />
                  Move to favorite
                </div>
              </div>
            </div>
            <div className="basket-color">Dark blue</div>
            <div className="basket-color">XL</div>
            <div className="basket-amount">
              <div className="amount-svg">
                <VscDiffAdded />
              </div>
              1
              <div className="amount-svg">
                <VscDiffRemoved />
              </div>
            </div>
            <div className="basket-price">249.99 $</div>
          </div>

          <div className="basket-cards">
            <div className="basket-img">
              <img src={Cloth2} />
              <div className="basket-desc">
                <div className="basket-name">Slim Fit Jeans</div>
                <div className="delete-fav">
                  <RiDeleteBin5Line />
                  Remove item
                  <MdOutlineFavoriteBorder />
                  Move to favorite
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
            <div className="basket-price">249.99 $</div>
          </div>
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
