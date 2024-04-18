import React, { useState } from 'react';

export default function AddUsersOperator() {

  const [selectedValue, setSelectedValue] = useState('');

  // Function to handle change in selected value
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
  
      <div className="user">
        <h2 className="form-title">User Details</h2>

        <div className="setting-details-form">
          <form>
            <div className="add-user">
              <div className="setting-group">
                <label htmlFor="name" className="setting-label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="add-input-field"
                />
              </div>
              <div className="setting-group">
                <label htmlFor="name" className="setting-label">
                  Surname
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="add-input-field"
                />
              </div>
            </div>
            <div className="add-user">
              <div className="setting-group">
                <label htmlFor="name" className="setting-label">
                Email
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="add-input-field"
                />
              </div>
              <div className="setting-group">
                <label htmlFor="name" className="setting-label">
                Phone Number                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="add-input-field"
                />
              </div>
            </div>

            <div className="add-user">
              <div className="setting-group">
                <label htmlFor="selector">Operator Name</label>
                <select
                  id="selector"
                  value={selectedValue}
                  onChange={handleChange}
                  className='add-input-field'
                >
                  <option value="">Choose an option</option>
                  <option value="option1">Site </option>
                  <option value="option2">Operator</option>
                </select>
              </div>
              <div className="setting-group">
                <label htmlFor="selector">Site Name</label>
                <select
                  id="selector"
                  value={selectedValue}
                  onChange={handleChange}
                  className='add-input-field'
                >
                  <option value="">Choose an option</option>
                  <option value="option1">Wild Horizons</option>
                  <option value="option2">Shark Cages</option>
                </select>
              </div>
            </div>

            <div className="setting-group">
                <label htmlFor="selector">User Type</label>
                <select
                  id="selector"
                  value={selectedValue}
                  onChange={handleChange}
                  className='add-input-field'
                >
                  <option value="">Choose an option</option>
                  <option value="option1">None</option>
                  <option value="option2">Admin</option>
                  <option value="option3">Super Admin</option>
                </select>
              </div>

            <div className="btn-setting-flex">
              <div className="check">
                <input className="check-box" type="checkbox" /> <p>Active</p>
              </div>
              <div className="setting-setting-group">
              
                <button type="submit" className="setting-button">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
  );
}
