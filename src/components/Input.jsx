import styles from "../styles/comp-styles/input.module.scss";

// Material UI Import:
import SearchIcon from "@mui/icons-material/Search";

const Input = ({ setSearch, search, placeholder }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inputContainer}>
        <SearchIcon sx={{ color: "black" }} />
        <input
          type="text"
          className={styles.input}
          placeholder={`${placeholder}`}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Input;
