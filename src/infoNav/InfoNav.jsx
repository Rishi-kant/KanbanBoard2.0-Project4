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
import { AiOutlineClear } from "react-icons/ai";

// this is for removing data from persist

function InfoNav() {
  const [isEditing, setIsEditing] = useState(false);
  const [anchorEl, setanchorEl] = useState(null);
  const [AnchorEl, SetAnchorEl] = React.useState(null);

  const [pop, setPop] = useState(null);
  const detail = useSelector((state) => state.detail);
  const dispatch = useDispatch(null);
  const navigate = useNavigate(null);
  const logoutClick = () => {
    dispatch(resetBourd());
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

  const open = (event) => {
    setPop(event.currentTarget);
  };
  const close = (event) => {
    setPop(null);
  };

  const handlePopoverOpen = (event) => {
    SetAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    SetAnchorEl(null);
  };

  const Open = Boolean(AnchorEl);
  // this function is for clear board
  const clearBoard = () => {
    dispatch(resetBourd());
  };
  return (
    <div className={style.container}>
      <div className={style.inner}>
        <div className={style.logOut}>
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

          <Typography
            aria-owns={Open ? "mouse-over-popover" : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
          >
            <div>
              <AiOutlineClear
                className={style.clearIcon}
                onClick={clearBoard}
              />
            </div>
          </Typography>
          <Popover
            id="mouse-over-popover"
            sx={{
              pointerEvents: "none",
            }}
            open={Open}
            anchorEl={AnchorEl}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            onClose={handlePopoverClose}
            disableRestoreFocus
          >
            <Typography sx={{ p: 1 }}>Clear board </Typography>
          </Popover>
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

          <Popover
            open={Boolean(pop)}
            onClose={close}
            anchorEl={pop}
            className={style.pop}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            sx={{ margin: 2 }}
          >
            <Typography sx={{ height: 30, margin: 2 }}>
              <div className={style.Logout}>
                {" "}
                <button className={style.logIcon} onClick={logoutClick}>
                  <BiLogOut />
                </button>
                <h4>Logout</h4>
              </div>
            </Typography>
          </Popover>

          <CgProfile onClick={open}  className={style.profileIcon}/>
        </div>
      </div>
    </div>
  );
}

export default InfoNav;
