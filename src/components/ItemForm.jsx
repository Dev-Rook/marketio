import { useState } from "react";

// Styles ImportL:
import "../styles/global.scss";
import styles from "../styles/comp-styles/itemForm.module.scss";

// Components Import:
import Hero from "../sections/Hero";

// Json Import:
import ConditionData from "../data/condition.json";
import TypeData from "../data/type.json";
import CurrencyData from "../data/currency.json";

const ItemForm = () => {
  const [condition, setCondition] = useState(ConditionData);
  const [conditionSelect, setConditionSelect] = useState(ConditionData.name);

  const [type, setType] = useState(TypeData);
  const [typeSelect, setTypeSelect] = useState(TypeData.name);

  const [currency, setCurrency] = useState(CurrencyData);
  const [currencySelect, setCurrencySelect] = useState(CurrencyData.name);

  return (
    <div className="section">
      <form action="Post" className={styles.form}>
        <div className={styles.sec}>
          <label htmlFor="">Upload Image</label>
          <input type="file" className={styles.fileInput} />
        </div>

        <div className={styles.doubleSec}>
          <div className={styles.sec}>
            <label htmlFor="">Price</label>
            <input type="number" placeholder="00.00" className={styles.input} />
          </div>
          <div className={styles.sec}>
            <label htmlFor="">Currenncy</label>
            {/* <input type="file" className={styles.input} /> */}
            <select
              value={currencySelect}
              onChange={(e) => {
                setCurrencySelect(e.target.value);
              }}
              className={styles.sectionInput}
            >
              <optgroup label="Select Currency">
                {currency?.map((item) => {
                  return (
                    <option
                      value={item.name}
                      className={styles.option}
                      key={item.id}
                    >
                      {item.cur}
                    </option>
                  );
                })}
              </optgroup>
            </select>
          </div>
        </div>

        <div className={styles.doubleSec}>
          <div className={styles.sec}>
            <label htmlFor="">Conditon</label>
            <select
              className={styles.sectionInput}
              value={conditionSelect}
              onChange={(e) => {
                setConditionSelect(e.target.value);
              }}
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
            <label htmlFor="">Type</label>
            <select
              value={typeSelect}
              onChange={(e) => {
                setTypeSelect(e.target.value);
              }}
              className={styles.sectionInput}
            >
              <optgroup label="Select Type">
                {type?.map((item) => {
                  return (
                    <option
                      value={item.name}
                      className={styles.option}
                      key={item.id}
                    >
                      {item.type}
                    </option>
                  );
                })}
              </optgroup>
            </select>
          </div>
        </div>

        <div className={styles.doubleSec}>
          <div className={styles.sec}>
            <label htmlFor="">Make</label>
            <input type="text" className={styles.input} />
          </div>
          <div className={styles.sec}>
            <label htmlFor="">Modle</label>
            <input type="text" className={styles.input} />
          </div>
        </div>

        <div className={styles.sec}>
          <label htmlFor="">Title</label>
          <input type="text" className={styles.input} />
        </div>

        <div className={styles.sec}>
          <label htmlFor="">Description</label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            maxLength="500"
            className={styles.input}
          ></textarea>
        </div>

        <p className={styles.title}>Contact Details</p>
        <div className={styles.doubleSec}>
          <div className={styles.sec}>
            <label htmlFor="">Phone</label>
            <input
              type="text"
              placeholder="1 (737) 267-222"
              className={styles.input}
            />
          </div>
          <div className={styles.sec}>
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="someone@gmail.com"
              className={styles.input}
            />
          </div>
        </div>

        <div className={styles.sec}>
          <label htmlFor="">Handover Location/Address</label>
          <input type="text" className={styles.input} />
          <p className={styles.finePrint}>
            You can copy coordinate & or paste a location link from google maps.
            If you would like to stay out of the handover ordeal, if a when a
            buy shows interest in what you are selling, ask for a mailing address
            or P.O box to ship item.
          </p>
        </div>

        <div className={"CallToActionBox"}>
          <button className={"Button"}>Upload</button>
        </div>
      </form>
    </div>
  );
};

export default ItemForm;
