import React from "react";
import TestimonyCard from "./TestimonyCard";
import { testimonies } from "./Testimonies";

// import Carousel from "react-elastic-carousel";

const TestimonialItems = () => {
  // let screenWidth = window.screen.width;
  // console.log(screenWidth);
  // const breakPoints = [
  //   { width: 1, itemsToShow: 1 },
  //   { width: 600, itemsToShow: 2 },
  //   { width: 760, itemsToShow: 3 },
  //   { width: 992, itemsToShow: 4 },
  // ];
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
  return <>{testimoniesDisplay}</>;
};

export default TestimonialItems;
