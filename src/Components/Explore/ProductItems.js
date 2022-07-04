import React from "react";
import { products } from "./Products";
import ProductItem from "./ProductItem";
import leftArrow from "../../Assets/ExploreAssets/leftArrow.png";
import rightArrow from "../../Assets/ExploreAssets/rightArrow.png";
import Carousel, { consts } from "react-elastic-carousel";
import "./ProductItems.scss";
// import Icon from "@mui/material/Icon";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const ProductItems = ({ product_type }) => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];

  const myArrow = ({ type, onClick, isEdge }) => {
    const pointer =
      type === consts.PREV ? (
        <img className="leftArrow" src={leftArrow} alt="" />
      ) : (
        <img className="rightArrow" src={rightArrow} alt="" />
      );
    return (
      <div onClick={onClick} disabled={isEdge}>
        {pointer}
      </div>
    );
  };

  const productTypeIndex = products.findIndex(
    (product) => product.productType === product_type
  );
  const productItemsss = products[productTypeIndex].productItems;
  const productDisplay = productItemsss.map((prdItem) => {
    const { name, id, price, img } = prdItem;
    return (
      <ProductItem
        name={name}
        key={id}
        price={price}
        product_Type={product_type}
        img={img}
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
      {" "}
      <div className="container-pitems">
        {" "}
        <Carousel
          breakPoints={breakPoints}
          renderArrow={myArrow}
          enableAutoPlay
          autoPlaySpeed={1500}
        >
          {productDisplay}
        </Carousel>
      </div>
    </>
  );
};

export default ProductItems;
