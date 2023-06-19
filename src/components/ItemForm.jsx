// Styles ImportL:
import "../styles/global.scss";
import styles from "../styles/comp-styles/itemForm.module.scss";

// Material UI Import:
import CameraAltIcon from "@mui/icons-material/CameraAlt";

// Components Import:
import ConditionSelector from "./ConditionSelector";

const ItemForm = () => {
  return (
    <div className="section">
      <form className={styles.form}>
        <div className={styles.title_camera}>
          <input
            type="text"
            name="name"
            placeholder="Item Title"
            className={styles.input}
            required
          />
          <CameraAltIcon
            sx={{ fontSize: 40, cursor: "pointer", color: "red" }}
          />
        </div>
        <textarea
          name="message"
          id=""
          cols="30"
          rows="10"
          placeholder="Item Description"
          className={styles.input}
          //   onChange={(event) => setMessage(event.target.value)}
        ></textarea>

        <div className={styles.item_details_area}>
          <ConditionSelector />
        </div>

        <div className={"CallToActionBox"}>
          <button className={"Button"} value="Send">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ItemForm;
