import React, { useState } from "react";
import CartMessageModal from "../components/cartMessageModel";
import b from "../assets/Vector.png";
import arrow from "../assets/arrow-circle.png";
import cart from "../assets/cart.png";
import { useEffect } from "react";
import axios from "axios";

export default function Cart() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bungeeJumpDiscountData, setBungeeJumpDiscountData] = useState([]);
  const [setSkywalkDiscountData] = useState([]);
  const [selectedActivity, setSelectedActivity] = useState("");
  const [cartData, setCartData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDiscountIndex, setSelectedDiscountIndex] = useState(null); // To track the index of the selected discount
  const [currentDiscount, setCurrentDiscount] = useState(null);

  useEffect(() => {
    const fetchCartData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          "https://staging.link2extreme.com/api/booking/cart/1"
        );
        setCartData(response.data);
      } catch (err) {
        setError("Failed to fetch cart data");
        console.error(err);
      }
      setIsLoading(false);
    };

    fetchCartData();
  }, []);

  const [editingClient, setEditingClient] = useState(null);

  const handleEditDiscount = (client) => {
    setEditingClient(client); // Set the client details to the state
    setIsModalOpen(true); // Open the modal
  };

  // Open modal for adding a new discount

  const handleDeleteDiscount = (index) => {
    const updatedDiscounts = [...bungeeJumpDiscountData];
    updatedDiscounts.splice(index, 1);
    setBungeeJumpDiscountData(updatedDiscounts);
  };

  const openModal = (activity) => {
    setIsModalOpen(true);
    setSelectedActivity(activity);
  };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };

  // const handleApplyDiscount = (data, activity) => {
  //   if (activity === "Bloukrans Bungee Jump") {
  //     setBungeeJumpDiscountData((prevData) => [...prevData, data]);
  //   } else if (activity === "Bloukrans Skywalk") {
  //     setSkywalkDiscountData((prevData) => [...prevData, data]);
  //   }
  //   closeModal();
  // };

  const handleApplyDiscount = (data, activity) => {
    if (selectedDiscountIndex !== null) {
      const updatedDiscounts = [...bungeeJumpDiscountData];
      updatedDiscounts[selectedDiscountIndex] = data; // Replace the existing discount with the edited one
      setBungeeJumpDiscountData(updatedDiscounts);
    } else {
      // Handle adding new discount
      // Logic to add the new discount to the data state
    }
  };

  return (
    <main id="home3">
      {cartData && (
        <>
          <div className="table-title-flex">
            <img className="arrow" src={arrow} alt="" />

            <div className="booking-cart-flex"></div>
          </div>
          <div className="parent-cart">
            <div className="raduis">
              <div className="table-header">
                <div className="header">Activity</div>
                <div className="header2">Participants</div>
                <div className="header3">Price</div>
                <div className="header4">Item</div>
                <div className="header5">Actions</div>
              </div>
              <div className="line6"></div>

              {cartData &&
                cartData.cart_items.map((item, index) => (
                  <div className="grid1" key={index}>
                    <div className="table1">
                      <p>
                        <span className="number">{index + 1}</span>.
                        {item.activity_name} <br />
                        <button
                          className="btn-open"
                          onClick={() => openModal(item.activity_name)}
                        >
                          click to apply discount
                        </button>
                      </p>
                    </div>
                    <div className="table2">
                      <span className="child-number">{item.adults}</span> Adult
                      <span className="child-text">and</span>
                      <span className="child-number">{item.children}</span>{" "}
                      Children
                    </div>
                    <div className="table3">
                      <p>Price R{item.activity_price.toFixed(2)}</p>
                    </div>
                    <div className="table4">
                      <span className="child-number">1</span>{" "}
                      {/* Assuming quantity is always 1, modify if necessary */}
                    </div>
                    <div className="table5">
                      <img className="cart-img" src={b} alt="" />
                    </div>
                    <div className="table6">
                      {/* Assuming dynamic discount display per item */}
                      <div className="f">
                        {item.clients_details.map((client, clientIndex) => (
                          <div key={clientIndex} className="discount-item">
                            <p>{client.client_name}</p>
                            <ul>
                              {Object.entries(item.discounts).map(
                                (
                                  [discountType, discountValue],
                                  discountIndex
                                ) =>
                                  discountValue > 0 && (
                                    <li key={discountIndex}>
                                      {discountType}: {discountValue}%
                                      <button
                                        onClick={() =>
                                          handleEditDiscount(client)
                                        }
                                      >
                                        Edit
                                      </button>
                                      <button
                                        onClick={() =>
                                          handleDeleteDiscount(discountIndex)
                                        }
                                      >
                                        Delete
                                      </button>
                                    </li>
                                  )
                              )}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <div className="flex-card">
              <div className="border-cart">
                <h3 className="header-p">Payment</h3>
                <div className="line2"></div>
                <div className="flex-d">
                  <p>Activities discount</p>
                  <h3>-R{cartData.total_discounts.toFixed(2)}</h3>
                </div>
                <div className="flex-d">
                  <p>Subtotal (Excluding Vat)</p>
                  <h3>R{cartData.cart_subtotal.toFixed(2)}</h3>
                </div>
                <div className="line3"></div>
                <div className="flex-total">
                  <div className="flex-down">
                    Vat Amount
                    <h3>
                      R{(cartData.cart_subtotal * cartData.vat).toFixed(2)}
                    </h3>
                  </div>
                  <div className="flex-down">
                    Grand Total
                    <h3>R{cartData.cart_total.toFixed(2)}</h3>
                  </div>
                </div>
              </div>
              <button className="btn-cart">Continue to Checkout</button>
            </div>
          </div>
          {isModalOpen && (
            <CartMessageModal
              onClose={() => {
                setIsModalOpen(false);
                setEditingClient(null); // Clear the editing client when closing the modal
              }}
              onApplyDiscount={handleApplyDiscount}
              activity={selectedActivity}
              initialDiscount={editingClient}
            />
          )}
        </>
      )}
    </main>
  );
}
