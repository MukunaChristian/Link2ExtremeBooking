export default function Editsetting() {
    return (
      <section className="setting">
        <div className="color">
          <h2 className="form-title"> Edit Company Settings</h2>
  
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
                    className="setting-input-field"
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
                      className="setting-input-field"
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
                      className="setting-input-field"
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
                    className="setting-input-field2"
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
                    className="setting-input-field2"
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
                      className="setting-input"
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
                      className="setting-input"
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
                      className="setting-input"
                    />
                  </div>
                </div>
              </div>
              <div className="btn-setting-flex">
               
                <div className="check">
                  <input className="check-box" type="checkbox" /> <p>Active</p>
                </div>
                <div className="setting-setting-group">
                  <button  className="setting-button">
                  Edit
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
  