import { useState } from "react";

// Styles ImportL:
import "../styles/global.scss";

// Context Import:
import { ItemCreationContext } from "../context/ItemCreationContext.js";

// Components Import:
import ItemForm from "../components/ItemForm";
import ServiceForm from "../components/ServiceForm";

const CreateItem = () => {
  const [formType, setFormType] = useState(true);

  const toggleFormType = () => {
    setFormType(prev => !prev);
  };

  return (
    <div className="page">
      <button style={{marginTop: "100px"}} onClick={toggleFormType}>Form Type</button>
      <ItemCreationContext.Provider value={""}>
        {formType ? <ItemForm /> : <ServiceForm />}
      </ItemCreationContext.Provider>
    </div>
  );
};

export default CreateItem;
