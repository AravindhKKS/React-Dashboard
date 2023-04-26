import "./UserContent.css";

const UserContent = () => {
  return (
    <div className="UserContent">
      <div className="UserContentContainer">
        <div className="userEmail">
          <p>
            Start Bootstrap <br />
            no-reply@startbootstrap.com
          </p>
        </div>
        <div className="userSetting">
          <p>Settings</p>
          <p>Activity Log</p>
        </div>
        <div className="userLogout">
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
};

export default UserContent;
