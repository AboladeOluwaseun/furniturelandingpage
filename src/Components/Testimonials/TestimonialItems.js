import React from "react";
import TestimonyCard from "./TestimonyCard";
import { testimonies } from "./Testimonies";

const TestimonialItems = () => {
  const testimoniesDisplay = testimonies.map((testimony) => {
    return (
      <TestimonyCard testimony={testimony} key={testimony.id}></TestimonyCard>
    );
  });
  return (
    <>
      <div>{testimoniesDisplay}</div>
    </>
  );
};

export default TestimonialItems;
