import { useState } from "react";

// Styles ImportL:
import "../styles/global.scss";

// Context Import:
import { ItemCreationContext } from "../context/ItemCreationContext.js";

// Components Import:
import ItemForm from "../components/ItemForm";
import ServiceForm from "../components/ServiceForm";

// Json Import:
import ConditionData from "../data/condition.json";
import TypeData from "../data/type.json";
import CurrencyData from "../data/currency.json";

const CreateItem = () => {
  // Form Type Switch State:
  const [formType, setFormType] = useState(true);
  // Select States:
  const [condition, setCondition] = useState(ConditionData);
  const [conditionSelect, setConditionSelect] = useState(ConditionData.name);

  const [type, setType] = useState(TypeData);
  const [typeSelect, setTypeSelect] = useState(TypeData.name);

  const [currency, setCurrency] = useState(CurrencyData);
  const [currencySelect, setCurrencySelect] = useState(CurrencyData.name);

  // Fucntions Start:
  const toggleFormType = () => {
    setFormType((prev) => !prev);
  };

  return (
    <div className="page">
      <button style={{ marginTop: "100px" }} onClick={toggleFormType}>
        Form Type
      </button>
      <ItemCreationContext.Provider
        value={{
          ConditionData,
          TypeData,
          CurrencyData,
          typeSelect,
          conditionSelect,
          condition,
          setConditionSelect,
          type,
          setTypeSelect,
          currency,
          setCurrencySelect,
          currencySelect
        }}
      >
        {formType ? <ItemForm /> : <ServiceForm />}
      </ItemCreationContext.Provider>
    </div>
  );
};

export default CreateItem;
