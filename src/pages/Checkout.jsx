import arrow from "../assets/arrow-circle.png";

export default function Checkout() {

  return (
    <main id="home4">
         <div className="table-title-flex">
        <img className="arrow" src={arrow} alt="" />

        <div className="booking-cart-flex">
        
          <h3>Checkout</h3>
        </div>
      </div>
      <div className="checkout-cart">
        <div className="checkout-raduis">
          <h3 className="title-up">Provide us with your billing details</h3>
          <div className="line4"></div>
          <h3>Enter primary booking details</h3>
          <div className="input-container">
            <div className="input-row">
              <label htmlFor="name">Name:</label>
              <input className="inputcheck" type="text" id="name" name="name" />
              <label htmlFor="surname">Surname:</label>
              <input className="inputcheck" type="text" id="surname" name="surname" />
            </div>
            <div className="input-row">
              <label htmlFor="email">Email:</label>
              <input className="inputcheck" type="email" id="email" name="email" />
              <label htmlFor="mobile">Mobile:</label>
              <input className="inputcheck" type="text" id="mobile" name="mobile" />
            </div>
          </div>
        </div>
        <div className="flex-card">
          <div className="checkout-cart2">
            <h3 className="center">Payment</h3>
            <div className="line2"></div>
            <div className="flex-d">
              <p>Total Purchase</p>
              <h3 className="checkout-b">R5,290.00</h3>
            </div>
            <h3>Date</h3>
            <p>Sun, 07 March 2004 09:00 GMT</p>
            <h3>Location</h3>
            <p>Bloukraans River Bridge, Tsitsikamma , Plettenburg Bay, 6600</p>
            <h3>Service</h3>
            <p>Bloukraans Bungee Jump (3 pax)</p>
            <p>Bloukraans Skywalk Tour (2 pax)</p>

            
          </div>
          <button className="btn-cart">Continue to Payment</button>
        </div>
      </div>
    </main>
  );
}
