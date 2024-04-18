export default function AddCompany() {
  return (
      <div className="add-company">
        <h2 className="form-title">Wild Horizons </h2>

        <div className="setting-details-form">
          <form>
            <div className="setting-group">
              <div className="setting-group">
                <label htmlFor="name" className="setting-label">
                  Company Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="company-input-field"
                />
              </div>
              <div className="input-flex">
                <div className="setting-group">
                  <label htmlFor="surname" className="setting-label">
                    Registration Number:
                  </label>
                  <input
                    type="text"
                    id="surname"
                    name="surname"
                    className="company-input-field"
                  />
                </div>

                <div className="setting-group">
                  <label htmlFor="phone" className="setting-label">
                    Vat Number:
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="company-input-field"
                  />
                </div>
              </div>
              <div className="setting-group">
                <label htmlFor="phone" className="setting-label">
                  Address Line 1:
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="add-input-field3"
                />
              </div>
              <div className="setting-group">
                <label htmlFor="phone" className="setting-label">
                  Address Line 2:
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="add-input-field3"
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
                    className="add-input"
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
                    className="add-input"
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
                    className="add-input"
                  />
                </div>
              </div>
              <div className="input-flex">
                <div className="setting-group">
                  <label htmlFor="surname" className="setting-label">
                    Email{" "}
                  </label>
                  <input
                    type="text"
                    id="surname"
                    name="surname"
                    className="company-input"
                  />
                </div>

                <div className="setting-group">
                  <label htmlFor="phone" className="setting-label">
                    Phone Number{" "}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="company-input"
                  />
                </div>
              </div>
            </div>
              
              <div className="add">
                <button type="submit" className="add-button">
                  Save
                </button>
              </div>
          
          </form>
        </div>
      </div>
  );
}
