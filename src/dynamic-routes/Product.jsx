import { useState, useEffect, useCallback } from "react";
import {useParams } from "react-router-dom";
import axios from "axios";

// Styles ImportL:
import "../styles/global.scss";
import styles from "../styles/sec-styles/productContainer.module.scss";

import BackBtn from "../components/BackBtn";

const Product = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const url = `https://fakestoreapi.com/products/${id}`;

  const getProductDetails = useCallback(async () => {
    try {
      const results = await axios.get(url);
      console.log(results);
      setDetails(results.data);
    } catch (err) {
      console.log(err);
    }
  }, [url]);

  useEffect(() => {
    getProductDetails();
  }, [getProductDetails]);

  return (
    <div className="utilityPage">
      <div className="utilitySection">
        <BackBtn />
        <div className={styles.ProductContainer}>
          <div className={styles.imgContainer}>
            <img src={details.image} alt="" className={styles.img} />
          </div>

          <div className={styles.detailsBox}>
            <p className={styles.title}>{details.title}</p>
            <p className={styles.price}>${details.price}</p>
            <p className={styles.description}>{details.description}</p>
            <button className={styles.cartBtn}>Add To Cart</button>

            <div className={styles.aquireBox}>
              <p className={styles.text}>Phone: 1 (795)-643-0011 </p>
              <p className={styles.text}>Email: person@email.com</p>
              <p className={styles.text}>
                Location: Click Icon for Google Maps - 📌
              </p>
              {details?.phone ? (
                <p className={styles.text}>Phone: {details?.phone} </p>
              ) : null}
              {details?.email ? (
                <p className={styles.text}>Email: {details?.email} </p>
              ) : null}
              {details?.location ? (
                <p className={styles.text}>Location: {details?.location} </p>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
