import React from "react";
import Bio from "../Bio/Bio";
import About from "../About/About";
import style from "./Personal.module.css";

const Personal = () => {
  return (
    <div>
      <div className={style.app}>
        <Bio />
        <About />
      </div>
    </div>
  );
};

export default Personal;
