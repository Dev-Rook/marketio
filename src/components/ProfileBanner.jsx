import { useState } from "react";
import { Link } from "react-router-dom";

// Styles Import:
import "../styles/global.scss";
import styles from "../styles/comp-styles/profileBanner.module.scss";

const ProfileBanner = ({ details }) => {
  return (
    <div className={styles.banner}>
      <div className={styles.pfpContainer}>
        <img src={""} alt="" className={styles.pfp} />
      </div>

      <p className={styles.name}>Username</p>
    </div>
  );
};

export default ProfileBanner;
