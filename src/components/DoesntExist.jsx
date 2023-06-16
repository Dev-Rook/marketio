import { useState } from "react";
import { Link } from "react-router-dom";

// Styles Import:
import "../styles/global.scss";
import styles from "../styles/comp-styles/doesntExist.module.scss";

const DoesntExist = () => {
  return (
    <div className={styles.label}>DoesntExist</div>
  )
}

export default DoesntExist