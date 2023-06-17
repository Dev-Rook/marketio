import { useState } from "react";
import { Link } from "react-router-dom";

// Hooks Imports:
import useAxios from "../hooks/useAxios";

// Styles ImportL:
import "../styles/global.scss";
import styles from "../styles/sec-styles/grid.module.scss";

// Material UI Imports:
import StartIcon from "@mui/icons-material/Start";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AddBoxIcon from "@mui/icons-material/AddBox";

// Loaders Import:
import ScaleLoader from "react-spinners/ScaleLoader";

// Components Import:
import ProfileBanner from "../components/ProfileBanner";
import Input from "../components/Input";
import DoesntExist from "../components/DoesntExist";

const Profile = () => {
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

  const placeholder = "Search user items...";

  return (
    <div className="page">
      <div className={"section"} id="">
        <ProfileBanner />
        <div className={styles.gridHeader}>
          <p className={"sectionTitle"}>User Items</p>
          <Input
            setSearch={setSearch}
            search={search}
            placeholder={placeholder}
          />
        </div>

        {filteredData.length > 0 ? (
          <div className={styles.contentCotainer}>
            <>
              {filteredData?.slice(0, 5).map((value) => {
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
                        <p className={styles.text}>
                          {value.title.slice(0, 30)}
                        </p>
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
          <button className={"Button"}>Vew More</button>
          {/* <StartIcon sx={{ color: "white", fontSize: 25 }} /> */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
