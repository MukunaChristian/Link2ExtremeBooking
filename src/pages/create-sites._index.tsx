import { useState } from "react";

export default function CreateSites() {
  const [paymentOption, setPaymentOption] = useState("");

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentOption(event.target.value);
  };
  return (
    <section className="setting">
      <div className="create">
        <h2 className="form-title">Sites</h2>

        <div className="create-details-form">
          <form>
            <div className="setting-group">
              <div className="setting-group">
                <label htmlFor="name" className="setting-label">
                  Site name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="create-input-field"
                />
              </div>

              <div className="setting-group">
                <label htmlFor="surname" className="setting-label">
                  Address Line 1
                </label>
                <input
                  type="text"
                  id="surname"
                  name="surname"
                  className="create-input-field"
                />
              </div>

              <div className="setting-group">
                <label htmlFor="phone" className="setting-label">
                  Address Line 2
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="create-input-field"
                />
              </div>
              <div className="setting-group-flex">
                <div>
                  <label htmlFor="phone" className="setting-label">
                    City:
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="create-input1"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="setting-label">
                    Country:
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="create-input1"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="setting-label">
                    Zip Code:
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="create-input1"
                  />
                </div>
              </div>

              <div className="create-group-flex">
                <div>
                  <label htmlFor="phone" className="setting-label">
                    Email
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="create-input"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="setting-label">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="create-input"
                  />
                </div>
              </div>
              <div className="create-flex3">
                <div className="colums">
                  <h1>Coordinates </h1>
                  <div className="flex-input2">
                    <label htmlFor="">Longitude:</label>
                    <input type="text" className=" flex-input2-fuild" />
                  </div>
                  <div className="flex-input2">
                    <label htmlFor="">Latitude:</label>
                    <input type="text" className=" flex-input2-fuild" />
                  </div>
                </div>
                <div className="colums">
                  <h1>Booking terms</h1>
                  <div className="flex4">
                    <div className="create-check">
                      <input
                        className="create-box"
                        type="radio"
                        id="upfront-payment"
                        name="payment-option"
                        value="upfront-payment"
                        checked={paymentOption === "upfront-payment"}
                        onChange={handleOptionChange}
                      />
                      <label htmlFor="upfront-payment">Upfront payment</label>
                    </div>
                    <div className="create-check">
                      <input
                        className="create-box"
                        type="radio"
                        id="reserve-booking"
                        name="payment-option"
                        value="reserve-booking"
                        checked={paymentOption === "reserve-booking"}
                        onChange={handleOptionChange}
                      />
                      <label htmlFor="reserve-booking">Reserve booking</label>
                    </div>
                  </div>
                </div>

                <div className="input1">
                  <h1>Cancellation terms</h1>
                  <input type="text" className="input-term1" />
                </div>
              </div>
            </div>
            <div className="create-flex">
              <div className="check">
                <input className="check-box" type="checkbox" /> <p>Active</p>
              </div>
              <div className="create-group">
                <button type="reset" className="setting-button">
                  Reset
                </button>
                <button type="submit" className="setting-button">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
