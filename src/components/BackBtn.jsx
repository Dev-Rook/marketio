import { useNavigate } from "react-router-dom";

// Styles Import:
import styles from "../styles/comp-styles/backBtn.module.scss"

// Material UI Imports:
import CloseIcon from "@mui/icons-material/Close";

const BackBtn = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="">
      <CloseIcon
        sx={{ fontSize: 35, color: "red" }}
        onClick={handleGoBack}
        className={styles.backIcon}
      />
    </div>
  );
};

export default BackBtn;
