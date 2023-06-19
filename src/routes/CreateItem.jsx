// Styles ImportL:
import "../styles/global.scss";

// Context Import:
import { ItemCreationContext } from "../context/ItemCreationContext.js";

// Components Import:
import ItemForm from "../components/ItemForm";

const CreateItem = () => {
  return (
    <div className="page">
      <ItemCreationContext.Provider value={""}>
        <ItemForm />
      </ItemCreationContext.Provider>
    </div>
  );
};

export default CreateItem;
