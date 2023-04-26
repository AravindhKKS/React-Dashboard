import "./Register.css";

const Register = () => {
  return (
    <div className="Register">
      <div className="Registercontainer">
        <div className="RegisterSubContainer">
          <div className="RegisterTitle">
            <p>Create Account</p>
          </div>
          <form className="RegisterForm">
            <div className="RegisterFullText">
              <div className="RegisterFormItem">
                <label>First Name</label>
                <input
                  type="text"
                  placeholder="Enter first name"
                  className="input-field"
                />
              </div>
              <div className="RegisterFormItem">
                <label>Last Name</label>
                <input
                  type="text"
                  placeholder="Last first name"
                  className="input-field"
                />
              </div>
            </div>
            <div className="RegisterFormItem">
              <label>Email</label>
              <input
                type="text"
                placeholder="Enter Email Address"
                className="input-field"
              />
            </div>
            <div className="RegisterFullText">
              <div className="RegisterFormItem">
                <label>Password</label>
                <input
                  type="text"
                  placeholder="Password"
                  className="input-field"
                />
              </div>
              <div className="RegisterFormItem">
                <label>Verify Password</label>
                <input
                  type="text"
                  placeholder="Verify Password"
                  className="input-field"
                />
              </div>
            </div>
            <input type="button" value="Create Account" />
          </form>
          <div className="LoginNav">
            <p>Have an Account? Go to Login</p>
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
export default Register;
