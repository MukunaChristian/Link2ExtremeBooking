// CartMessageModal.js

import React, { useState, useEffect } from 'react';

const CartMessageModal = ({ onClose, onApplyDiscount, activity, initialDiscount }) => {
  // Setup initial states with default values or values from `initialDiscount`
  const [title, setTitle] = useState("");
  const [name, setName] = useState(initialDiscount?.client_name || "");
  const [surname, setSurname] = useState(""); // Assume surname is part of the details if needed
  const [email, setEmail] = useState(initialDiscount?.client_email || "");
  const [id, setId] = useState(initialDiscount?.id_number || "");


useEffect(() => {
  if (initialDiscount) {
    setTitle(initialDiscount.title || "");
    setName(initialDiscount.client_name || "");
    setSurname(initialDiscount.surname || "");
    setEmail(initialDiscount.client_email || "");
    setId(initialDiscount.id_number || "");
  }
}, [initialDiscount]);

const handleSubmit = (e) => {
  e.preventDefault();
  const discountData = { title, name, surname, email, id };

  // Determine if adding new or updating an existing entry
  if (editing) {
    updateDiscount(discountData, activity);
  } else {
    onApplyDiscount(discountData, activity);
  }

  onClose();
};





  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>&times;</button>
        <h2>Apply Discount</h2>
        <p>Apply discount for selected activity. Select Discount type and provide the individual being discounted’s identification.</p>
        <form onSubmit={handleSubmit}>
          {/* Form fields remain as previously defined */}
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <select id="title" className="select-modal" value={title} onChange={(e) => setTitle(e.target.value)}>
              <option value="">Select...</option>
              <option value="Pensioner">Pensioner</option>
              <option value="Local">Local</option>
              <option value="Special">Special</option>
              <option value="Child Under 12">Child Under 12</option>
            </select>
          </div>
          <h1>Details</h1>

          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input className="input-modal" type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="surname">Surname:</label>
            <input className="input-modal" type="text" id="surname" value={surname} onChange={(e) => setSurname(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input className="input-modal" type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="id">ID:</label>
            <input className="input-modal" type="text" id="id" value={id} onChange={(e) => setId(e.target.value)} />
          </div>
          <div className='margin'>
          <button className="btn-modal" type="submit">Apply Discount</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CartMessageModal;
