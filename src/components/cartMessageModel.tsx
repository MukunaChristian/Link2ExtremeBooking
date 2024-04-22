import React, { useState } from "react";

const CartMessageModal = ({ onClose, onApplyDiscount, activity }) => {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Applying discount with data:", { title, name, surname });

    onApplyDiscount({ title, name}, activity);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>
          &times; 
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
              <option value="Pensioner">Pensioner.</option>
              <option value="Pensioner">Pensioner.</option>
              <option value="Pensioner">Pensioner.</option>
              <option value="Pensioner">Pensioner.</option>
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
            <label htmlFor="text">Surname:</label>
            <input
              className="input-modal"
              type="text"
              id="surname"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              className="input-modal"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="text">ID:</label>
            <input
              className="input-modal"
              type="text"
              id="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
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
