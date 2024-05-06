import cart from "../assets/cart.png";
export default function topbar() {
  return(
    <div className="topbar">
      <h1 className="logo">Link2Extreme</h1>
      <div className="cart-icon-container">
        <img src={cart}alt="Cart" className="cart_icon" />
      </div>
    </div>
  );
}
