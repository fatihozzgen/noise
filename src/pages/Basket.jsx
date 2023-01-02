import React from "react";

function Basket() {
  return (
    <div className="basket">
      <div className="basket-header"> Shopping cart items</div>
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
  );
}

export default Basket;
