import React from "react";
import ProductListItem from "../productListItem/ProductListItem";
import styles from "./productList.module.css";

const ProductList = ({ data, onAddToCart }) => {
  return (
    <ul className={styles.productList}>
      {data.map((product) => (
        <ProductListItem
          key={product.id}
          {...product}
          addToCart={onAddToCart}
        />
      ))}
    </ul>
  );
};

export default ProductList;
