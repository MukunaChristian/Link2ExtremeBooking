import React, { useState } from "react";
import CartMessageModal from "../components/cartMessageModel";
import b from "../assets/Vector.png";
import arrow from "../assets/arrow-left.png";
import cart from "../assets/cart.png";



export default function Cart() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bungeeJumpDiscountData, setBungeeJumpDiscountData] = useState([]);
  const [skywalkDiscountData, setSkywalkDiscountData] = useState([]);
  const [selectedActivity, setSelectedActivity] = useState("");

  const handleEditDiscount = (index) => {
    // Implement logic to handle editing the discount at the specified index
    console.log("Editing discount at index:", index);
  };

  const handleDeleteDiscount = (index) => {
    // Implement logic to handle deleting the discount at the specified index
    console.log("Deleting discount at index:", index);
    const updatedDiscounts = [...bungeeJumpDiscountData];
    updatedDiscounts.splice(index, 1);
    setBungeeJumpDiscountData(updatedDiscounts);
  };

  const openModal = (activity) => {
    setIsModalOpen(true);
    setSelectedActivity(activity);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleApplyDiscount = (data, activity) => {
    if (activity === "Bloukrans Bungee Jump") {
      setBungeeJumpDiscountData((prevData) => [...prevData, data]);
    } else if (activity === "Bloukrans Skywalk") {
      setSkywalkDiscountData((prevData) => [...prevData, data]);
    }
    closeModal();
  };

  return (
    <main id="home3">
       <div className="table-title-flex">
        <img className="arrow" src={arrow} alt="" />

        <div className="booking-cart-flex">
        
          <h3>Cart</h3>
        </div>
      </div>
      <div className="parent-cart">
        <div className="raduis">
          <div className="table-header">
            <div className="header">Activity</div>
            <div className="header2">Participants</div>
            <div className="header3">Price</div>
            <div className="header4">Item</div>
            <div className="header">Actions</div>
          </div>
          <div className="line6"></div>


          <div className="grid1">
            <div className="table1">
              {" "}
              <p>
                1.Bloukrans Bungee Jump <br />{" "}
                <button onClick={() => openModal("Bloukrans Bungee Jump")}>
                  click to apply discount
                </button>
              </p>
            </div>
            <div className="table2">
              {" "}
              <span className="child-number">1</span> Adult
              <span className="child-text">and</span>
              <span className="child-number">0</span> Children
            </div>
            <div className="table3">
              {" "}
              <p>Price R1800</p>
            </div>
            <div className="table4">
              {" "}
              <span className="child-number">1</span>
            </div>
            <div className="table5">
              {" "}
              <img className="cart-img" src={b} alt="" />
            </div>
            <div className="table6">
              <div>
                {bungeeJumpDiscountData.map((discount, index) => (
                  <div key={index} className="discount-item">
                    <p>
                      {discount.name} <span className="discount-title">{discount.title}</span>
                      {discount.surname}
                      <button onClick={() => handleEditDiscount(index)}>
                        Edit
                      </button>
                      <button onClick={() => handleDeleteDiscount(index)}>
                      <img className="table-img" src={b} alt="" />
                      </button>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
        </div>
        <div className="flex-card">
          <div className="border-cart">
            <h3>Payment</h3>
            <div className="line2"></div>
            <div className="flex-d">
              <p>Activities</p>
              <h3>-R680</h3>
            </div>

            <div className="flex-d">
              <p>Activities</p>
              <h3>-R680</h3>
            </div>
            <div className="line3"></div>
            <div className="flex-down">
              Total(1 item)
              <h3>R1800</h3>
            </div>
          </div>
          <button className="btn-cart">Continue to Checkout</button>
        </div>
      </div>
      {isModalOpen && (
        <CartMessageModal
          onClose={closeModal}
          onApplyDiscount={handleApplyDiscount}
          activity={selectedActivity}
        />
      )}
    </main>
  );
}
