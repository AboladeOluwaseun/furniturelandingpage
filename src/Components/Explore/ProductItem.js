import React from "react";
import "./ProductItem.scss";
// import chair from "../../Assets/ExploreAssets/Chair1.png";
import Vectorstar from "../../Assets/ExploreAssets/Vectorstar.png";
import Vectoradd from "../../Assets/ExploreAssets/Vectoradd.png";
const ProductItem = ({ name, price, id, product_type, img }) => {
  return (
    <>
      <div className="product-item">
        <div>
          <img className="product-img" src={img} alt="chair" />
        </div>
        <div className="product-detail">
          <div className="product-name">
            <p className="p-1">{product_type}</p>
            <p className="p-2">{name}</p>
            <div className="rating">
              <div>
                <img src={Vectorstar} alt="vector-star" />
              </div>
              <div>
                <img src={Vectorstar} alt="vector-star" />
              </div>
              <div>
                <img src={Vectorstar} alt="vector-star" />
              </div>
              <div>
                <img src={Vectorstar} alt="vector-star" />
              </div>
              <div>
                <img src={Vectorstar} alt="vector-star" />
              </div>
            </div>
          </div>
          <div className="pricing">
            <p>
              <span>$</span>
              {price}
            </p>
            <div>
              <img src={Vectoradd} alt="Vector-add" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
