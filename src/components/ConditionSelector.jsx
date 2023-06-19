import { useState } from "react";

// Styles Import:
// import "../styles/imp-styles/selection.css";
import styles from "../styles/comp-styles/selctor.module.scss";

// Json Import:
import conditionData from "../data/condition.json";

const ConditionSelector = () => {
  const [data, setData] = useState(conditionData);
  const [condition, setCondition] = useState(conditionData.name);
  console.log(condition)

  return (
    <select name="Condition Select" id="" className={styles.select}>
      <optgroup label="Select Item Conditon">
        {data?.map((item) => {
          return (
            <option value="" key={item.id} className={styles.option} onChange={(e) => {setCondition(e.target.value)}}>
              {item.name}
            </option>
          );
        })}
      </optgroup>
    </select>
  );
};

export default ConditionSelector;
