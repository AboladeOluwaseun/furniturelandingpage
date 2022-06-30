import React from "react";
import Vectorstar from "../../Assets/ExploreAssets/Vectorstar.png";
import testimonybackground from "../../Assets/ExploreAssets/testimonybackground.png";
import "./TestimonyCard.scss";

const TestimonyCard = ({ testimony }) => {
  return (
    <>
      <div className="test-container">
        <img className="bkgd-img" src={testimonybackground} alt="" />
        <div className="testimony-detail">
          <div>
            <p className="p-name">{testimony.name}</p>
            <p className="p-location">{testimony.location}</p>
          </div>
          <p className="p-testimony">{testimony.testimony}</p>

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
      </div>
    </>
  );
};

export default TestimonyCard;
