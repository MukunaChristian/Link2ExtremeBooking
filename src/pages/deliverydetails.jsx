export default function Profile() {
  return (
    <section className="profile">
      <div className="profile-child1">
        <div className="flex">
          <h2>Profile</h2>
          <p className="btn-flex">Personal Details</p>
          <p className="btn-flex">Company Details</p>
          <p className="btn-flex">Invoice Details</p>
          <p className="btn-flex">Delivery Details</p>
        </div>
      </div>
      <div className="profile-child2">
      <div className="personal-details-form">
  <h2 className="form-title">Delivery Details</h2>
  <form>
    <div className="form-group">
        <div className="form-group">
          <label htmlFor="name">Address Line 1:</label>
          <input type="text" id="name" name="name" className="input-field" placeholder="Enter your name" />
        </div>
        <div className="form-group">
          <label htmlFor="surname">Address Line 2:</label>
          <input type="text" id="surname" name="surname" className="input-field" placeholder="Enter your surname" />
        </div>
      
      <div className="form-group">
        <label htmlFor="phone">City:</label>
        <input type="tel" id="phone" name="phone" className="input-field" placeholder="Enter your phone number" />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Country:</label>
        <input type="tel" id="phone" name="phone" className="input-field" placeholder="Enter your phone number" />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Zip Code:</label>
        <input type="tel" id="phone" name="phone" className="input-field" placeholder="Enter your phone number" />
      </div>
    </div>
    <div className="button-group">
      <button type="reset" className="reset-button">Reset</button>
      <button type="submit" className="save-button">Save</button>
    </div>
  </form>
</div>

      </div>
    </section>
  );
}
