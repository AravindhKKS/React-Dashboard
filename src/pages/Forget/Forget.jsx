import "./Forget.css";

const Forget = () => {
  return (
    <div className="Recovery">
      <div className="Recoverycontainer">
        <div className="RecoverySubContainer">
          <div className="RecoveryTitle">
            <p>Password Recovery</p>
          </div>
          <form className="RecoveryForm">
            <div className="RecoveryText">
              <p>
                Enter your email address and we will send you a link to reset
                your password.
              </p>
            </div>
            <div className="RecoveryFormItem">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="input-field"
              />
            </div>
            <div className="Recovery_Forget_Button">
              <p className="forget">Return to login?</p>
              <input type="button" value="Reset Password" />
            </div>
          </form>
          <div className="RegisterNav">
            <p>Need an account? Sign up!</p>
          </div>
        </div>
      </div>
      <div className="Dashboard_Copy_Term">
        <div className="DashboardCopy">Copyright © Your Website 2023</div>
        <div className="DashboardTerm">
          <p>Privacy Policy</p>
          <p> ·Terms & Conditions</p>
        </div>
      </div>
    </div>
  );
};

export default Forget;
