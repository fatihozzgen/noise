import React from "react";

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
        </div>

        <div className="basket-summary">
          <div className="summary-header"> Summary</div>
          <div className="summary-prices">
            <div>
              Total products: <span>249.99</span>
            </div>
            <div>
              Shipping costs: <span>Free</span>
            </div>
            <div style={{ fontWeight: "bold" }}>Add promocode </div>
          </div>

          <div className="total-price">
            Total: <span>249.99</span>
          </div>
          <button className="checkout-btn">CHECKOUT</button>
        </div>
      </div>
    </>
  );
}

export default Basket;
