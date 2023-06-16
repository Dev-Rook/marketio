import { useState } from "react";
import { Link } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import useFirebase from "../hooks/useFirebase";

// Styles Import:
import "../styles/global.scss";
import styles from "../styles/sec-styles/grid.module.scss";

// Material UI Imports:
import StartIcon from "@mui/icons-material/Start";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AddBoxIcon from "@mui/icons-material/AddBox";

// Componet Import:
import Input from "../components/Input";

const ProductGrid = () => {
  const url = `https://fakestoreapi.com/products`;
  // const url = `https://dummyjson.com/products`;
  const { data, loading, error } = useAxios(url);

  const [search, setSearch] = useState("");

  const filteredData = data.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={"section"} id="">
      <div className={styles.gridHeader}>
        <p className={"sectionTitle"}>Current Marketplace</p>

        <Input setSearch={setSearch} />
      </div>
      <div className={styles.contentCotainer}>
        {filteredData.length > 0 ? (
          <>
            {filteredData?.slice(0, 10).map((value) => {
              return (
                <div className={styles.card} key={value.id}>
                  <div className={styles.actionBox}>
                    <AddBoxIcon sx={{ fontSize: 30, color: "red" }} />
                    <Link to={`product/${value.id}`}>
                      <VisibilityIcon sx={{ fontSize: 30, color: "black" }} />
                    </Link>
                  </div>
                  <div className={styles.imgContainer}>
                    <img
                      src={value.image}
                      alt="Under Development"
                      className={styles.img}
                    />
                  </div>
                  <p className={styles.text}>{value.title.slice(0, 30)}</p>
                  <p className={styles.text}>${value.price}</p>
                </div>
              );
            })}
          </>
        ) : (
          <p>No Such item Exists</p>
        )}
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

// : (
//   <p>No Such item Exists</p>
// )

// .filter((item) => {
//   return search.toLowerCase() === ""
//    // ? item
//     : item.title.toLowerCase().includes(search) ||
//         item.description.toLowerCase().includes(search);
// })
