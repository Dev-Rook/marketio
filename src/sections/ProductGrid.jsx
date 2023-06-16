import { useState } from "react";
import { Link } from "react-router-dom";
import useAxios from "../hooks/useAxios";

// Styles Import:
import "../styles/global.scss";
import styles from "../styles/sec-styles/grid.module.scss";

// Material UI Imports:
import StartIcon from "@mui/icons-material/Start";

// Componet Import:
import Input from "../components/Input";

const ProductGrid = () => {
  const url = `https://fakestoreapi.com/products`;
  const { data, loading, error } = useAxios(url);

  const [search, setSearch] = useState("");

  return (
    <div className={"section"} id="">
      <div className={styles.gridHeader}>
        <p className={"sectionTitle"}>Current Marketplace</p>

        <Input setSearch={setSearch} />
      </div>
      <div className={styles.contentCotainer}>
        {data
          ?.filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.title.toLowerCase().includes(search) ||
                  item.description.toLowerCase().includes(search);
          })
          .slice(0, 10)
          .map((value) => {
            return (
              <Link to={value.link} key={value.id}>
                <div className={styles.card}>
                  <div className={styles.imgContainer}>
                    <img
                      src={value.image}
                      alt="Under Development"
                      className={styles.img}
                    />
                  </div>
                  <p className={styles.text}>{value.title.slice(0, 30)}</p>
                </div>
              </Link>
            );
          })}
      </div>

      <div className={"CallToActionBox"}>
        <Link to={"/posts"}>
          <button className={"Button"}>Vew All</button>
        </Link>
        <StartIcon sx={{ color: "white", fontSize: 25 }} />
      </div>
    </div>
  );
};

export default ProductGrid;
