export default function ConfirmFogotPasword() {
    return (
      <div className="confirm-container">
        <div className="form-container">
          <h1>Forgot Password</h1>
          <p>Please enter and confirm your new password</p>
          <form className="login-form">
            <div className="custom-container">
              <label htmlFor="email">Email</label>
  
              <input
                name="password"
                className="field"
                type="password"
                placeholder="Enter Password"
              />
            </div>
            <div className="custom-container">
            <label htmlFor="email">Confirm New Password</label>
  
            <input
              name="confirm_password"
              className="field"
              type="password"
              placeholder="Re-enter password"
            />
            </div>
            <button type="submit" className="confirm-login-button">
            Continue to login
            </button>
          </form>
        </div>
      </div>
    );
  }