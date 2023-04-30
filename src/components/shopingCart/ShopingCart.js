import React from "react";
import { MdShoppingCart, MdOutlineShoppingCart } from "react-icons/md";
import ProductList from "../productList/ProductList";
import styles from "./shopingCart.module.css";

const ShopingCart = ({
  isOpen,
  onCartProduct,
  toogleCart,
  onhandleBuyProducts,
}) => {
  return (
    <>
      <button className={styles.cartButton} onClick={toogleCart}>
        {isOpen ? (
          <MdShoppingCart className={styles.cartButtonIsOpen} />
        ) : (
          <MdOutlineShoppingCart className={styles.cartButtonIsClose} />
        )}
        {isOpen ? "Close" : "Open"}
      </button>
      {isOpen && <ProductList data={onCartProduct} />}
      <button onClick={onhandleBuyProducts}>buy this t-shirt</button>
    </>
  );
};

export default ShopingCart;
