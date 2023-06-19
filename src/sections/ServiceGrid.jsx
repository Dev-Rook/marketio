import { useState } from "react";
import { Link } from "react-router-dom";

// Hooks Imports:
import useAxios from "../hooks/useAxios";
// import useFirebase from "../hooks/useFirebase";

// Styles Import:
import "../styles/global.scss";
import styles from "../styles/sec-styles/grid.module.scss";

// Material UI Imports:
import StartIcon from "@mui/icons-material/Start";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AddBoxIcon from "@mui/icons-material/AddBox";

// Loaders Import:
import ScaleLoader from "react-spinners/ScaleLoader";

// Componet Import:
import Input from "../components/Input";
import DoesntExist from "../components/DoesntExist";

const ServiceGrid = () => {
  const url = `https://fakestoreapi.com/products`;
  // const url = `https://dummyjson.com/products`;
  const { data, loading, error } = useAxios(url);

  const [search, setSearch] = useState("");
  const filteredData = data.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase())
  );

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  const placeholder = "Search marketplace...";

  return (
    <div className={"section"} id="">
      <div className={styles.gridHeader}>
        <p className={"sectionTitle"}>Service Market</p>
        <Input
          setSearch={setSearch}
          search={search}
          placeholder={placeholder}
        />
      </div>

      {filteredData.length > 0 ? (
        <div className={styles.contentCotainer}>
          <>
            {filteredData?.slice(0, 10).map((value) => {
              return (
                <>
                  {loading ? (
                    <ScaleLoader
                      color={"red"}
                      loading={loading}
                      cssOverride={override}
                      size={80}
                      aria-label="Loading Spinner"
                      data-testid="loader"
                    />
                  ) : error ? (
                    <p>{error}</p>
                  ) : (
                    <div className={styles.card} key={value.id}>
                      <div className={styles.actionBox}>
                        <AddBoxIcon sx={{ fontSize: 30, color: "red" }} />
                        <Link to={`/product/${value.id}`}>
                          <VisibilityIcon
                            sx={{ fontSize: 30, color: "black" }}
                          />
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
                  )}
                </>
              );
            })}
          </>
        </div>
      ) : (
        <>{!loading && <DoesntExist search={search} />}</>
      )}

      <div className={"CallToActionBox"}>
        <Link to={"/posts"}>
          <button className={"Button"}>Vew All</button>
        </Link>
        <StartIcon sx={{ color: "white", fontSize: 25 }} />
      </div>
    </div>
  );
};

export default ServiceGrid;
