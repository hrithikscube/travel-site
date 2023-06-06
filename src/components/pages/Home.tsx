import Header from "../Header";
import Banner from "../Banner";
import SeeWorld from "../SeeWorld";
import HeroSection from "../sections/HeroSection";
import PopularPackages from "../sections/PopularPackages";
import RatingSection from "../sections/RatingSection";
import Experience from "../sections/Experience";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <HeroSection />
      <Banner />
      <PopularPackages />
      <Experience />
      <RatingSection />
      <SeeWorld />
    </div>
  );
};

export default Home;
