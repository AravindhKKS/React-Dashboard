import { MdKeyboardBackspace } from "react-icons/md";
import "./page.css";

const E401 = () => {
  const style = {
    width: "30px",
    height: "30px",
    textDecoration: "underline",
  };
  return (
    <div>
      <div className="Error500">
        <div className="ErrorType500"> 500</div>
        <div className="ErrorText500">Internal Server Error</div>
        <div className="dashNav">
          <MdKeyboardBackspace style={style} />
          <h3 className="text">Return to Dashboard</h3>
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

export default E401;
