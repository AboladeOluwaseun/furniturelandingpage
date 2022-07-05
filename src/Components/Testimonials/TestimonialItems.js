import React from "react";
import TestimonyCard from "./TestimonyCard";
import { testimonies } from "./Testimonies";
import leftArrow from "../../Assets/ExploreAssets/leftArrow.png";
import rightArrow from "../../Assets/ExploreAssets/rightArrow.png";
import "./TestimonialItems.scss";

import Carousel, { consts } from "react-elastic-carousel";

const TestimonialItems = () => {
  // let screenWidth = window.screen.width;
  // console.log(screenWidth);
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
  const testimoniesDisplay = testimonies.map((testimony) => {
    return (
      <TestimonyCard testimony={testimony} key={testimony.id}></TestimonyCard>
    );
  });
  // console.log(testimoniesDisplay);
  // const testimoniesDisplayItems = () => {
  //   if (screenWidth <= 360) {
  //     return <div>{testimoniesDisplay}</div>;
  //   } else
  //     return (
  //       <Carousel breakPoints={breakPoints} enableAutoPlay autoPlaySpeed={1500}>
  //         {testimoniesDisplay}
  //       </Carousel>
  //     );
  // };
  return (
    <>
      <div className="test-items">
        <Carousel
          breakPoints={breakPoints}
          renderArrow={myArrow}
          enableAutoPlay
          autoPlaySpeed={1500}
        >
          {testimoniesDisplay}
        </Carousel>
      </div>
    </>
  );
};

export default TestimonialItems;
