export default function ConfirmFogotPasword() {
    return (
      <div className="welcome-container">
        <div className="welcome-new-container">
          <h1>Welcome </h1>
          <p>Please enter and confirm your new password</p>
          <form className="welcome-new-form">
            <div className="user-container">
              <label htmlFor="email"> New Password</label>
  
              <input
                name="password"
                className="welcome-field"
                type="password"
                placeholder="Enter Password"
              />
            </div>
            <div className="user-container">
            <label htmlFor="email">Confirm New Password</label>
  
            <input
              name="confirm_password"
              className="welcome-field"
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