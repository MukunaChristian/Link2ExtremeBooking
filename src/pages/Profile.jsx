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
  <h2 className="form-title">Personal Details</h2>
  <form>
    <div className="form-group">
      <div className="name-surname">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" className="input-field-profile" placeholder="Enter your name" />
        </div>
        <div className="form-group">
          <label htmlFor="surname">Surname:</label>
          <input type="text" id="surname" name="surname" className="input-field-profile" placeholder="Enter your surname" />
        </div>
      </div>
      <div className="name-surname">
      <div className="form-group">
   
        <label htmlFor="phone">Phone Number:</label>
        <input type="tel" id="phone" name="phone" className="input-field-profile" placeholder="Enter your phone number" />
      </div>
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
