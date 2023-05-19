import React, { useState } from "react";
import style from "./LandingPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addDetail } from "../redux/details";

function LandingPage() {
  const [boardName, setBoardName] = useState("");
  const [name, setName] = useState("");
  const detail = useSelector((state) => state.detail);
  const dispatch = useDispatch(null);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addDetail({
        boardName,
        name,
      })
    );
    navigate("/board");
  };

  return (
    <div className={style.container}>
      <div className={style.head}>
        <h3>Create a board</h3>
      </div>
      <form className={style.form} onSubmit={handleSubmit}>
        <div className={style.board}>
          <label aria-required> Board title :-</label>
          <input
            className={style.inp}
            value={boardName}
            onChange={(e) => setBoardName(e.target.value)}
          />
        </div>
        <div className={style.name}>
          <label aria-required> Your name :-</label>
          <input
            className={style.inp}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" className={style.btn}>
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

export default LandingPage;
