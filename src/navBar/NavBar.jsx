import React from "react";
import style from "./NavBar.module.css";
function NavBar() {
  return (
    <div className={style.container}>
      <div className={style.navContent}>
        <h1>KanbanBoard</h1>
      </div>
    </div>
  );
}

export default NavBar;
