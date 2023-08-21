import React from "react";
import style from "./Backlay.module.css";

const Backlay = ({ children, onClick }) => {
  return (
    <div className={style.backlay} onClick={onClick}>
      {children}
    </div>
  );
};

export default Backlay;
