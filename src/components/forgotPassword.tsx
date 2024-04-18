
export default function  ForgotPassword () {


  return (
    <div className="forgot-password-container">
    <div className="form-forgot">
      <h1 className="text-3xl mb-6">Forgot Password</h1>
      <p className="mb-2">Please enter your email below in order to reset your password</p>
      
      <form className="forgot-form">
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <div className="input-field-container">
            <input name="email" className="input-field" type="text" placeholder="Enter Email" />
            <img src="app/assets/icons8-continue-50 1.png" alt="Continue" className="continue-icon" />
          </div>
        </div>
        <button type="submit" className="submit-button">Continue</button>
      </form>
    </div>
  </div>
  
  

  
  )
}
