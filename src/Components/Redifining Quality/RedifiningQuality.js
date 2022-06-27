import React from "react";
import Arrow from "../../Assets/AboutUsAssets/Arrow.png";
import rect from "../../Assets/ExploreAssets/Rectangle 849.png";
import "./RedifiningQuality.scss";

const RedifiningQuality = () => {
  return (
    <>
      <div className="redifining-quality">
        <div className="container">
          <img className="cont-img" src={rect} alt="" />
          <div className="content">
            <p className="p1">REDEFINING QUALITY</p>
            <h2>
              We Provide You The <br /> Best Experience
            </h2>
            <div className="cont-ps">
              <p>
                Funiso (Pronounced ‘fur-ni-shur’) is an international based
                furniture company, filled with best of designers from around the
                world.
              </p>
              <p>
                You don’t have to worry about the result because all of these
                interiors are made by people who are professionals in their
                fields with an elegant and luxurious style and with premium
                quality materials.
              </p>
              <p>
                Find all-Inclusive and beautifully designed furniture for your
                spaces at less cost. Our services are majorly tailored towards
                creating all- inclusive and beautifully designed furniture at
                less cost.
              </p>
            </div>
            <p className="contact-us">
              Contact Us{" "}
              <span>
                <img src={Arrow} alt="" />
              </span>
            </p>
          </div>
        </div>{" "}
      </div>
    </>
  );
};

export default RedifiningQuality;
