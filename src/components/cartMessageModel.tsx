import React, { useState } from "react";

const CartMessageModal = ({ onClose, onApplyDiscount, activity }) => {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Applying discount with data:", { title, name, surname });

    // Pass the entered data and activity to the parent component
    onApplyDiscount({ title, name, surname }, activity);
    // Close the modal after applying the discount
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>
          &times; {/* Unicode character for 'x' */}
        </button>
        <h2>Apply Discount</h2>
        <p>
          Apply discount for selected activity. Select Discount type and the
          provide the individual being discounted’s identification..
        </p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <select
              id="title"
              className="select-modal"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            >
              <option value="mr">Pensioner.</option>
              <option value="ms">Pensioner.</option>
              <option value="mrs">Pensioner.</option>
              <option value="dr">Pensioner.</option>
            </select>
          </div>
          <h1>Details</h1>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              className="input-modal"
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="surname">Surname:</label>
            <input
              className="input-modal"
              type="text"
              id="surname"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="surname">Email:</label>
            <input
              className="input-modal"
              type="email"
              id="surname"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="surname">Surname:</label>
            <input
              className="input-modal"
              type="text"
              id="surname"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
          </div>
          <div className="margin">
            <button className="btn-modal" type="submit">
              Apply
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CartMessageModal;
