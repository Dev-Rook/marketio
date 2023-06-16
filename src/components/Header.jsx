import { useState } from "react";
import { Link } from "react-router-dom";

// Styles Import:
import "../styles/global.scss";
import styles from "../styles/comp-styles/header.module.scss";

// Material UI Import:
import LocalMallIcon from "@mui/icons-material/LocalMall";

// Media Import:
import logo from "../assets/icons/octopus4.png";

// Json Import:

const Header = () => {
  return (
    <nav className={styles.header}>
      <div className={styles.left}>
        <Link to="/">
          <img src={logo} alt="" className={styles.logo} />
        </Link>
        {/* <video src={logo} className={styles.logo}></video> */}
      </div>
      <div className={styles.right}>
        <LocalMallIcon sx={{ fontSize: 35 }} />
        <div className={styles.profileBtn}>
          <img src="" alt="" className={styles.profileImg} />
        </div>
      </div>
    </nav>
  );
};

export default Header;
