import { MdKeyboardBackspace } from "react-icons/md";
import "./page.css";

const E401 = () => {
  const style = {
    width: "30px",
    height: "30px",
  };
  return (
    <div>
      <div className="Error401">
        <div className="ErrorType401"> 401</div>
        <div className="ErrorText401">Unauthorized</div>
        <p className="ErrorMessage401">Access to this resource is denied.</p>
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
