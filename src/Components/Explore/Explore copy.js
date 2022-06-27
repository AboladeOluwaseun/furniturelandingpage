import React from "react";
import ProductExplore from "./ProductExplore";
import Arrow from "../../Assets/AboutUsAssets/Arrow.png";
import "./Explore.scss";

const Explore = () => {
  return (
    <>
      <div className="explore">
        <h2 className="explore-h2">Explore Our Products</h2>
        <ProductExplore></ProductExplore>
        <p className="see-all-products">
          See all Products{" "}
          <span>
            <img src={Arrow} alt="" />
          </span>
        </p>
      </div>
    </>
  );
};

export default Explore;
