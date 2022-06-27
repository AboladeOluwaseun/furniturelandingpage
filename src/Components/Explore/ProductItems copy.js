import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { products } from "./Products";

const ProductItems = ({ product_type }) => {
  const [prdItems, setprdItems] = useState([]);

  const productDisplay = products.forEach((product) => {
    if (product.productType === product_type) {
      setprdItems(product.productItems);
      // product.productItems.forEach((prditm) => {
      //   return <p>hello</p>;
      // });
    }
  });

  // const productDisplayItems = prdItems.map((prdItem) => {
  // return prdItem;
  // });

  return (
    <>
      <p>{prdItems}</p>
      <p>{productDisplay}</p>
    </>
  );
};

export default ProductItems;
