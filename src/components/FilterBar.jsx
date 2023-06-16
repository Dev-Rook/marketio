import { useState } from "react";
import { Link } from "react-router-dom";

// Styles Import:
import "../styles/global.scss";
import styles from "../styles/comp-styles/filterBar.module.scss";

// Material UI Import:

// Media Import:

// Json Import:
import routeData from "../data/routes.json";

const FilterBar = () => {
  const [routes, setRoutes] = useState(routeData);
  return (
    <div className="section">
      <ul className={styles.filterBar}>
        {/* {routes?.map((item) => {
          return <li key={item.id} className={styles.link}>{item.name}</li>;
        })} */}
        Shop & Trade At Your Own Risk
      </ul>
    </div>
  );
};

export default FilterBar;
