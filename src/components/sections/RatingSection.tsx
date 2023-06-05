import React from "react";
import RatingCard from "../RatingCard";
import Title from "../Title";

const RatingSection = () => {
  return (
    <div className="lg:px-20 px-5">
      <Title heading="Read our Rating Reviews" subheading="testimonials" />
      <RatingCard type="white" />
      <br />
      <RatingCard type="blue" />
    </div>
  );
};

export default RatingSection;
