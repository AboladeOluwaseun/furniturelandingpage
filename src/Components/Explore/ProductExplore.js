import React from "react";
import ProductItem from "./ProductItem";

import { products } from "./Products";
import "./ProductExplore.scss";
import { useEffect } from "react";
import ProductItems from "./ProductItems";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { useState } from "react";

const ProductExplore = () => {
  const [product_Type, setProductType] = useState("Chair");
  const productType = products.map((product) => {
    return (
      <li onClick={() => setProductType(product.productType)}>
        {product.productType}
      </li>
    );
  });

  return (
    <>
      <div className="container">
        <ul className="product-type">{productType}</ul>

        <ProductItems product_type={product_Type}></ProductItems>
      </div>
    </>
  );
};

export default ProductExplore;
