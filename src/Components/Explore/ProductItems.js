import React from "react";

import { products } from "./Products";
import ProductItem from "./ProductItem";

import Carousel, { consts } from "react-elastic-carousel";

import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

import "./ProductItems.scss";

// useState

const ProductItems = ({ product_type }) => {
  // const [current, setCurrent] = useState(0 && 1);
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 600, itemsToShow: 2 },
    { width: 760, itemsToShow: 3 },
    { width: 992, itemsToShow: 4 },
  ];

  const myArrow = ({ type, onClick, isEdge }) => {
    const pointer =
      type === consts.PREV ? (
        <FaArrowAltCircleLeft className="arrow-div-1" />
      ) : (
        <FaArrowAltCircleRight className="arrow-div-2" />
      );
    return (
      <div onClick={onClick} disabled={isEdge}>
        {pointer}
      </div>
    );
  };

  const productDisplay = products.map((product) => {
    if (product.productType === product_type) {
      return product.productItems.map((prdItem) => {
        const { name, id, price } = prdItem;
        return (
          <ProductItem
            name={name}
            key={id}
            price={price}
            product_Type={product_type}
          ></ProductItem>
        );
      });
    }
    return null;
  });
  // const length = productDisplay.length;
  // const nextSlide = () => {
  //   setCurrent(
  //     current === length - 1 && length - 2 ? 0 && 1 : current + 1 && current + 1
  //   );
  // };

  // const prevSlide = () => {
  //   setCurrent(current === 0 ? length - 1 : current - 1);
  // };

  return (
    <>
      <div className="container-pitems">
        {/* <FaArrowAltCircleLeft className="arrow-div-1" />
        <FaArrowAltCircleRight className="arrow-div-2" /> */}
        <Carousel
          breakPoints={breakPoints}
          enableAutoPlay
          autoPlaySpeed={1500}
          renderArrow={myArrow}
        >
          {productDisplay}
        </Carousel>
      </div>
    </>
  );
};

export default ProductItems;
