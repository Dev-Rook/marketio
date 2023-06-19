// Styles ImportL:
import "../styles/global.scss";

// Components Import:
import ItemForm from "../components/ItemForm";

const CreateItem = () => {
  return (
    <div className="utilityPage">
      <div className="utilitySection">
        <ItemForm />
      </div>
    </div>
  );
};

export default CreateItem;
