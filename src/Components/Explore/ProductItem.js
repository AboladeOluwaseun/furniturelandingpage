import React from "react";
import "./ProductItem.scss";
import chair from "../../Assets/ExploreAssets/Chair1.png";
import Vectorstar from "../../Assets/ExploreAssets/Vectorstar.png";
import Vectoradd from "../../Assets/ExploreAssets/Vectoradd.png";
const ProductItem = ({ name, price, id, product_type }) => {
  return (
    <>
      <div className="product-item">
        <img className="product-img" src={chair} alt="chair" />
        <div className="product-detail">
          <div className="product-name">
            <p className="p-1">{product_type}</p>
            <p className="p-2">{name}</p>
            <div className="rating">
              <img src={Vectorstar} alt="vector-star" />
              <img src={Vectorstar} alt="vector-star" />
              <img src={Vectorstar} alt="vector-star" />
              <img src={Vectorstar} alt="vector-star" />
              <img src={Vectorstar} alt="vector-star" />
            </div>
          </div>
          <div className="pricing">
            <p>
              <span>$</span>
              {price}
            </p>
            <img src={Vectoradd} alt="Vector-add" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
