import Header from "../Header";
import Banner from "../Banner";
import SeeWorld from "../SeeWorld";
import RatingCard from "../RatingCard";
import Title from "../Title";
import HeroSection from "../sections/HeroSection";
import PopularPackages from "../sections/PopularPackages";
import RatingSection from "../sections/RatingSection";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Banner />
      <PopularPackages />
      <RatingSection />
      <SeeWorld />
    </div>
  );
};

export default Home;
