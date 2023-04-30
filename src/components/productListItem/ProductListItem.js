import React from "react";
import styles from "./productListItem.module.css";

const ProductListItem = ({ id, title, sku, addToCart, chooseCart, image }) => {
  return (
    <li className={styles.productContainer}>
      <img
        style={chooseCart && { height: 300 }}
        className={styles.productImage}
        src={
          image
            ? image
            : require(`../../../assets/products/${sku}_${
                chooseCart ? 2 : 1
              }.jpg`)
        }
        alt="products"
      />
      <h2 className={styles.title}>{title}</h2>

      {!chooseCart && (
        <button className={styles.productButton} onClick={() => addToCart(id)}>
          BUY
        </button>
      )}
    </li>
  );
};

export default ProductListItem;
