import "./Topbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { AiFillCaretDown } from "react-icons/ai";
import { useState } from "react";
import UserContent from "../UserContent/UserContent";

const Topbar = () => {
  const [searchOutline, setSearchOutline] = useState(false);
  const [menuOutline, setMenuOutline] = useState(false);
  const [show, setShow] = useState(false);

  const [color, setColor] = useState("white");

  const menuClick = () => {
    setMenuOutline(!menuOutline);
  };

  const searchClick = () => {
    setSearchOutline(!searchOutline);
  };
  const userClick = () => {
    setShow(!show);
    setColor(color === " white" ? "lightgray" : " white");
  };

  const style = {
    color: color,
    cursor: "pointer",
  };

  const menuIcon = {
    outline: menuOutline ? "2px solid skyblue" : "none",
    width: "30px",
    height: "30px",
    padding: "5px",
    borderRadius: "2.5px",
  };

  const searchIcon = {
    outline: searchOutline ? "3px solid #6610f2" : "none",
  };

  return (
    <div className="Topbar">
      <div className="TopbarContainer">
        <div className="TopbarLeft">
          <div className="TopbarLeftText">Start Bootstrap</div>
          <div className="TopbarLeftIcon" onClick={menuClick}>
            <GiHamburgerMenu className="menuIcon" style={menuIcon} />
          </div>
        </div>
        <div className="TopbarRight">
          <div className="TopbarRightSearch">
            <input type="text" placeholder="Search for..." />
            <div
              className="searchIcon"
              style={searchIcon}
              onClick={searchClick}
            >
              <BsSearch />
            </div>
          </div>
          <div className="TopbarRightUser">
            <div
              className="TopbarRightUserIcon"
              onClick={userClick}
              style={style}
            >
              <FaUserAlt />
              <AiFillCaretDown />
            </div>
          </div>
        </div>
      </div>
      {show && <UserContent />}
    </div>
  );
};

export default Topbar;
