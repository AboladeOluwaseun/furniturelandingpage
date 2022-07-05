import React from "react";
import arrow from "../../Assets/AboutUsAssets/Arrow.png";
import "./AboutUs.scss";
const AboutUs = () => {
  const About = {
    luxuryFacilities: {
      title: "Luxury facilities",
      content:
        "The advantage of having a workspcae from us that gives you comfortable service and all-round facilities",
    },

    affordablePrice: {
      title: "Affordable Price",
      content:
        "You can get a workspace of the highest quality and at affordable price and still enjoy the facilities that are only here.",
    },

    manyChoices: {
      title: "Many Choices",
      content:
        "We provide many unique work space choices so that you can choose the workspace to your liking.",
    },
  };

  return (
    <>
      <div className="about-us">
        <div className="container">
          <h2>Why Choose Us</h2>
          <div className="divs">
            <div className="div-1">
              <p className="p-1">{About.luxuryFacilities.title}</p>
              <p className="p-2">{About.luxuryFacilities.content}</p>
              <div className="p-3">
                {" "}
                <p>More info</p>
                <img src={arrow} alt="arrow" />
              </div>
            </div>

            <div className="div-2">
              <p className="p-1">{About.affordablePrice.title}</p>
              <p className="p-2">{About.affordablePrice.content}</p>
              <div className="p-3">
                {" "}
                <p>More info</p>
                <img src={arrow} alt="arrow" />
              </div>
            </div>

            <div className="div-3">
              <p className="p-1">{About.manyChoices.title}</p>
              <p className="p-2">{About.manyChoices.content}</p>
              <div className="p-3">
                {" "}
                <p>More info</p>
                <div>
                  <img src={arrow} alt="arrow" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
