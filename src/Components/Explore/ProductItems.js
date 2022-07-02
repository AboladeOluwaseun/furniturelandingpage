import React from "react";
import { products } from "./Products";
import ProductItem from "./ProductItem";

import Carousel from "react-elastic-carousel";

const ProductItems = ({ product_type }) => {
  const productTypeIndex = products.findIndex(
    (product) => product.productType === product_type
  );
  const productItemsss = products[productTypeIndex].productItems;
  console.log(productItemsss);
  const productDisplay = productItemsss.map((prdItem) => {
    const { name, id, price, src } = prdItem;
    return (
      <ProductItem
        name={name}
        key={id}
        price={price}
        product_Type={product_type}
        src={src}
      ></ProductItem>
    );
  });

  // const productDisplay = products.map((product) => {
  //   if (product.productType === product_type) {
  //     return product.productItems.map((prdItem) => {
  //       const { name, id, price } = prdItem;
  //       return (
  //         <ProductItem
  //           name={name}
  //           key={id}
  //           price={price}
  //           product_Type={product_type}
  //         ></ProductItem>
  //       );
  //     });
  //   }
  //   return null;
  // });
  return (
    <>
      <Carousel>{productDisplay}</Carousel>
    </>
  );
};

export default ProductItems;
