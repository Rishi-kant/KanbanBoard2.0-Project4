import React, { useState } from "react";
import style from "./InfoNav.module.css";
import { CgProfile } from "react-icons/cg";
import { BiLogOut } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateBoardName } from "../redux/details";
// import { reset } from '../redux/board'
function InfoNav() {
  const [text, setText] = useState();
  const [isEditing, setIsEditing] = useState(false);

  const detail = useSelector((state) => state.detail);
  const dispatch = useDispatch(null);
  const navigate = useNavigate(null);
  const logoutClick = () => {
    navigate("/");
  };

  // this is for column name editing
  const handleDivClick = () => {
    setIsEditing(true);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setIsEditing(false);
      // setNewText(event.target.innerText)
      dispatch(
        updateBoardName({
          
          newName: `${event.target.innerText}`,
        })
      );
    }
  };
  return (
    <div className={style.container}>
      <div className={style.inner}>
        <div className={style.logOut}>
          <BiLogOut className={style.logIcon} onClick={logoutClick} />

          <div
            onClick={handleDivClick}
            contentEditable={isEditing}
            onKeyDown={handleKeyDown}className={style.contentEditable}

          >
            {detail.boardName}
          </div>
          {/* <h3>{detail.boardName}</h3> */}
        </div>
        <div className={style.prof}>
          <h3>{detail.name}</h3>
          <CgProfile />
        </div>
      </div>
    </div>
  );
}

export default InfoNav;
