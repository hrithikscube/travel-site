import RatingCard from "../RatingCard";
import Title from "../Title";

import { useEffect } from "react";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";

// react marquee
import Marquee from "react-fast-marquee";

const RatingSection = () => {

  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)
  }, [])
  return (
    <div className="ratingsContainer">
      <Title heading="Read our Rating Reviews" subheading="testimonials"  />

      <p className="text-center text-[#263238] opacity-50 text-lg mb-5 font-outfitMedium">Written by real travelers, just like you!</p>

      <Marquee>
        <RatingCard type={true ? 'white' : 'blue'} />
        <RatingCard type={false ? 'white' : 'blue'} />
        <RatingCard type={true ? 'white' : 'blue'} />
      </Marquee>
      <br />
      <Marquee direction="right">
        <RatingCard type={true ? 'white' : 'blue'} />
        <RatingCard type={false ? 'white' : 'blue'} />
        <RatingCard type={true ? 'white' : 'blue'} />
      </Marquee>
    </div>
  );
};

export default RatingSection;
