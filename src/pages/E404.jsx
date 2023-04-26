import "./page.css";
import { MdKeyboardBackspace } from "react-icons/md";

const E404 = () => {
  const style = {
    width: "30px",
    height: "30px",
  };
  return (
    <div>
      <div className="pageContent">
        <img
          className="img404"
          src="assets/404.png
        "
          alt=""
        />
      </div>
      <p className="Text404">
        This requested URL was not found on this server.
      </p>
      <div className="dashNav">
        <MdKeyboardBackspace style={style} />
        <h3 className="text">Return to Dashboard</h3>
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

export default E404;
