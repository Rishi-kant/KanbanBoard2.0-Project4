import React, { useState } from "react";
import style from "./InfoNav.module.css";
import { CgProfile } from "react-icons/cg";
import { BiLogOut } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateBoardName } from "../redux/details";
import { Button, Divider, Popover, Typography } from "@mui/material";
import { IoIosArrowDown } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { Link } from "react-router-dom";
import { resetBourd } from "../redux/board";

// this is for removing data from persist

function InfoNav() {
  const [text, setText] = useState();
  const [isEditing, setIsEditing] = useState(false);
  const [anchorEl, setanchorEl] = useState(null);
  const detail = useSelector((state) => state.detail);
  const dispatch = useDispatch(null);
  const navigate = useNavigate(null);
  const logoutClick = () => {
    dispatch(resetBourd())
    navigate("/");
  };

  const handleDivClick = () => {
    setIsEditing(true);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setIsEditing(false);

      dispatch(
        updateBoardName({
          newName: `${event.target.innerText}`,
        })
      );
    }
  };
  const openPopover = (event) => {
    setanchorEl(event.currentTarget);
  };
  const closePopover = (event) => {
    setanchorEl(null);
  };
  return (
    <div className={style.container}>
      <div className={style.inner}>
        <div className={style.logOut}>
         <button  className={style.logIcon}   onClick={logoutClick} >
          <BiLogOut />
          </button>
          <div
            onClick={handleDivClick}
            contentEditable={isEditing}
            onKeyDown={handleKeyDown}
            className={style.contentEditable}
          >
            {detail.boardName}
          </div>
          <Popover
            open={Boolean(anchorEl)}
            onClose={closePopover}
            anchorEl={anchorEl}
            className={style.pop}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            sx={{ margin: 3 }}
          >
            <Typography varient="body2" sx={{ padding: 3 }}>
              <Divider></Divider>
              <br></br>
              <div className={style.user}>
                <FaUserAlt />
                <h4>{detail.name + "'" + "s" + " " + "workspace"}</h4>
              </div>
            </Typography>
          </Popover>
          <div>
            <div onClick={openPopover} className={style.over}>
              <Button sx={{ color: "white" }}>workspace</Button>
              <IoIosArrowDown />
            </div>
          </div>
        </div>
        <div className={style.prof}>
          <Link to="/back">
            {" "}
            <Button sx={{ color: "white" }}>
              change background
              <BsStars />
            </Button>
          </Link>
          <h3>{detail.name}</h3>

          <CgProfile />
        </div>
      </div>
    </div>
  );
}

export default InfoNav;
