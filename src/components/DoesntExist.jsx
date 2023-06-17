import { useState } from "react";
import { Link } from "react-router-dom";

// Styles Import:
import "../styles/global.scss";
import styles from "../styles/comp-styles/doesntExist.module.scss";

const DoesntExist = ({ search }) => {
  return (
    <div className={styles.label}>
      <div className={styles.textBox}>
        <h1>Error 204</h1>
        <h2 className={styles.mainText}>
          This Item: <span>&ldquo;{search}&rdquo;</span> | Does Not Exist
        </h2>
      </div>
    </div>
  );
};

export default DoesntExist;
