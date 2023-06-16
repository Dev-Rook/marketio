import { useState } from "react";
import { Link } from "react-router-dom";

// Styles Import:
import "../styles/global.scss";
import styles from "../styles/sec-styles/other.module.scss";

const Other = () => {
  return (
    <div className="section">
      <div className={styles.wrapper}>
        <div className={styles.box}>
          <img src="" alt="" className="styles img" />
          <div className={styles.textBox}>Text</div>
        </div>
        <div className={styles.box}>
          <img src="" alt="" className="styles img" />
          <div className={styles.textBox}>Text</div>
        </div>
      </div>
    </div>
  );
};

export default Other;
