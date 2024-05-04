import React from "react";
import cart from "../assets/cart.png";


export default function topbar() {
  return(
    <div className="topbar">
      <h1 className="logo">LXextreme</h1>
      <div className="cart-icon-container">
        <img src={cart}alt="Cart" className="cart-icon" />
      </div>
    </div>
  );
}
