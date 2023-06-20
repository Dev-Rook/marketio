import { useState } from "react";

import { useContext } from "react";
import { ItemCreationContext } from "../context/ItemCreationContext";

// Styles Import:
// import "../styles/imp-styles/selection.css";
import styles from "../styles/comp-styles/itemForm.module.scss";

const ConditionSelector = () => {
  const { condition, setConditionSelect } = useContext(ItemCreationContext);
  return (
    <optgroup label="Select Item Conditon">
      {condition?.map((item) => {
        return (
          <option
            value=""
            key={item.id}
            className={styles.option}
          >
            {item.name}
          </option>
        );
      })}
    </optgroup>
  );
};

export default ConditionSelector;
