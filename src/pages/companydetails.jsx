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
      <div className="company-details-form">
  <h2 className="form-title">Company Details</h2>
  <form>
    <div className="form-group">
      <div className="form-field">
        <label htmlFor="companyName">Company Name:</label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          className="input-field"
          placeholder="Enter company name"
        />
      </div>
      <div className="form-field">
        <label htmlFor="addressLine1">Address Line 1:</label>
        <input
          type="text"
          id="addressLine1"
          name="addressLine1"
          className="input-field"
          placeholder="Enter address line 1"
        />
      </div>
      <div className="form-field">
        <label htmlFor="addressLine2">Address Line 2:</label>
        <input
          type="text"
          id="addressLine2"
          name="addressLine2"
          className="input-field"
          placeholder="Enter address line 2"
        />
      </div>
      <div className="form-field">
        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          name="city"
          className="input-field"
          placeholder="Enter city"
        />
      </div>
      <div className="form-field">
        <label htmlFor="country">Country:</label>
        <input
          type="text"
          id="country"
          name="country"
          className="input-field"
          placeholder="Enter country"
        />
      </div>
      <div className="form-field">
        <label htmlFor="zipCode">Zip Code:</label>
        <input
          type="text"
          id="zipCode"
          name="zipCode"
          className="input-field"
          placeholder="Enter zip code"
        />
      </div>
    </div>
    <div className="button-group">
      <button type="reset" className="reset-button">
        Reset
      </button>
      <button type="submit" className="save-button">
        Save
      </button>
    </div>
  </form>
</div>

      </div>
    </section>
  );
}
