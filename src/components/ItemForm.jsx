import { useState } from "react";

// Styles ImportL:
import "../styles/global.scss";
import styles from "../styles/comp-styles/itemForm.module.scss";

// Components Import:
import Hero from "../sections/Hero";

// Json Import:
import ConditionData from "../data/condition.json";

const ItemForm = () => {
  const [condition, setCondition] = useState(ConditionData);

  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    console.log(selectedOption);
  };

  return (
    <div className="section">
      <form action="Post" className={styles.form}>
        <div className={styles.sec}>
          <label htmlFor="Upload Picture">Upload Picture</label>
          <input type="file" className={styles.fileInput} />
        </div>

        <div className={styles.doubleSec}>
          <div className={styles.sec}>
            <label htmlFor="Upload Picture">Price</label>
            <input type="number" className={styles.input} />
          </div>
          <div className={styles.sec}>
            <label htmlFor="Upload Picture">Currenncy</label>
            {/* <input type="file" className={styles.input} /> */}
            <select className={styles.sectionInput}>
              <optgroup label="Select Currency">
                <option value="" className={styles.option}>
                  JMD
                </option>
                <option value="" className={styles.option}>
                  USD
                </option>
                <option value="" className={styles.option}>
                  GBP
                </option>
                <option value="" className={styles.option}>
                  CAN
                </option>
              </optgroup>
            </select>
          </div>
        </div>

        <div className={styles.doubleSec}>
          <div className={styles.sec}>
            <label htmlFor="Upload Picture">Conditon</label>
            <select
              className={styles.sectionInput}
              value={selectedOption}
              onChange={handleSelectChange}
            >
              <optgroup label="Select Condition">
                {condition?.map((item) => {
                  return (
                    <option
                      value={item.name}
                      className={styles.option}
                      key={item.id}
                    >
                      {item.name}
                    </option>
                  );
                })}
              </optgroup>
            </select>
          </div>
          <div className={styles.sec}>
            <label htmlFor="Upload Picture">Type</label>
            <select className={styles.sectionInput}>
              <optgroup label="Select Currency">
                <option value="" className={styles.option}>
                  Electronics
                </option>
                <option value="" className={styles.option}>
                  Auto Parts
                </option>
                <option value="" className={styles.option}>
                  Vehicles
                </option>
                <option value="" className={styles.option}>
                  Furniture
                </option>
                <option value="" className={styles.option}>
                  Clothing
                </option>
                <option value="" className={styles.option}>
                  Appliances
                </option>
                <option value="" className={styles.option}>
                  Jewelry
                </option>
              </optgroup>
            </select>
          </div>
        </div>

        <div className={styles.doubleSec}>
          <div className={styles.sec}>
            <label htmlFor="Upload Picture">Make</label>
            <input type="tex" className={styles.input} />
          </div>
          <div className={styles.sec}>
            <label htmlFor="Upload Picture">Modle</label>
            <input type="text" className={styles.input} />
          </div>
        </div>

        <div className={styles.sec}>
          <label htmlFor="Upload Picture">Title</label>
          <input type="text" className={styles.input} />
        </div>

        <div className={styles.sec}>
          <label htmlFor="Upload Picture">Description</label>
            <textarea name="" id="" cols="30" rows="10" className={styles.input}></textarea>
        </div>
      </form>
    </div>
  );
};

export default ItemForm;
