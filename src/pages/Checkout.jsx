import { useState } from "react";
import axios from "axios";
import arrow from "../assets/arrow-circle.png";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    mobile: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckout = async () => {
    try {
      const response = await axios.post(
        "https://staging.link2extreme.com/api/booking/cart/1/checkout",
        formData
      );
      console.log("Checkout successful:", response);
      // Handle post-checkout logic, such as redirection or success message
    } catch (error) {
      console.error("Checkout failed:", error);
      // Handle errors, such as showing a message to the user
    }
  };

  const goBack = () => {
    navigate(-1); // This navigates back to the previous page
  };

  return (
    <main id="home4">
      <div className="table-title-flex">
        <img className="arrow1" onClick={goBack} src={arrow} alt="" />
      </div>
      <div className="checkout-cart">
        <div className="checkout-raduis">
          <h3 className="title-up">Provide us with your billing details</h3>
          <div className="line4"></div>
          <h3>Enter primary booking details</h3>
          <div className="form-container">
            <div className="form-row">
              <label htmlFor="name">Name:</label>
              <input
                className="form-input"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <label htmlFor="surname">Surname:</label>
              <input
                className="form-input"
                type="text"
                id="surname"
                name="surname"
                value={formData.surname}
                onChange={handleChange}
              />
            </div>
            <div className="form-row">
              <label htmlFor="email">Email:</label>
              <input
                className="form-input"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <label htmlFor="mobile">Mobile:</label>
              <input
                className="form-input"
                type="text"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="flex-card">
          <div className="checkout-cart2">
            <h3 className="center">Payment</h3>
            <div className="line2"></div>

            <h3>Date</h3>
            <p>Sun, 07 March 2004 09:00 GMT</p>
            <h3>Location</h3>
            <p>Bloukraans River Bridge, Tsitsikamma, Plettenburg Bay, 6600</p>
            <h3>Service</h3>
            <p>Bloukraans Bungee Jump (3 pax)</p>
            <p>Bloukraans Skywalk Tour (2 pax)</p>
            <div className="flex-d">
              <h4>Total Purchase</h4>
              <h3 className="checkout-b">R5,290.00</h3>
            </div>
          </div>
          <button className="btn-cart" onClick={handleCheckout}>
            Continue to Payment
          </button>
        </div>
      </div>
    </main>
  );
}
