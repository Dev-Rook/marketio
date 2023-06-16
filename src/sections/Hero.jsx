import { useState } from "react";
import { Link } from "react-router-dom";

// Styles Import:
import "../styles/global.scss";
import styles from "../styles/sec-styles/hero.module.scss";

// Material UI Import:

// Media Import:

// Json Import:
import gridData from "../data/heroGrid.json";

const Hero = () => {
  const [heroGrid, setHeroGrid] = useState(gridData);
  return (
    <div className="section">
      <div className={styles.contentContainer}>
        <div className={styles.billboard}></div>
        <div className={styles.heroGrid}>
          {heroGrid?.map((item) => {
            return (
              <Link to={item.link} key={item.id}>
                <div className={styles.gridBox}></div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hero;
