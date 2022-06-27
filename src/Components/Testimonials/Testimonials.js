import React from "react";
import TestimonialItems from "./TestimonialItems";
import "./Testimonials.scss";

const Testimonials = () => {
  return (
    <>
      <div className="testimonials">
        <div className="container">
          <p className="p-title">TESTIMONIALS</p>
          <h2>Our Client Reviews</h2>
          <TestimonialItems></TestimonialItems>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
