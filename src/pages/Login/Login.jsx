import "./Login.css";

const Login = () => {
  return (
    <div className="Login">
      <div className="Logincontainer">
        <div className="LoginSubContainer">
          <div className="LoginTitle">
            <p>Login</p>
          </div>
          <form className="LoginForm">
            <div className="LoginFormItem">
              <input
                type="text"
                placeholder="Enter Email Address"
                className="input-field"
              />
            </div>
            <div className="LoginFormItem">
              <input
                type="text"
                placeholder="Password"
                className="input-field"
              />
            </div>
            <div className="rember">
              <input type="checkbox" id="rember" />
              <label for="rember">Remember Password</label>
            </div>
            <div className="Login_Forget_Button">
              <p className="forget">Forget Password?</p>
              <input type="button" value="Login" />
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

export default Login;
