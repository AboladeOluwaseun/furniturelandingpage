import React from "react";
import { products } from "./Products";
import ProductItem from "./ProductItem";
// import "react-alice-carousel/lib/scss/alice-carousel.scss";
// import AliceCarousel from "react-alice-carousel";
// import Carousel,{ consts } from "react-elastic-carousel";
// import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";

const ProductItems = ({ product_type }) => {
  const productTypeIndex = products.findIndex(
    (product) => product.productType === product_type
  );
  const productItemsss = products[productTypeIndex].productItems;
  console.log(productItemsss);
  const productDisplay = productItemsss.map((prdItem) => {
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

  // console.log(productDisplay);
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
      {/* <FaArrowAltCircleLeft className="arrow-div-1" />
        <FaArrowAltCircleRight className="arrow-div-2" /> */}

      <Carousel>{productDisplay}</Carousel>
    </>
  );
};

export default ProductItems;
