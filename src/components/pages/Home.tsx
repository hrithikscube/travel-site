import Header from '../Header'
import Banner from '../Banner'
import SeeWorld from '../SeeWorld'
import RatingCard from '../RatingCard'
import Title from '../Title'
import HeroSection from '../sections/HeroSection'

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Banner />
      <Title />
      <Title heading="Read our Rating Reviews" subheading="testimonials"/>
      <RatingCard type="white" />
      <br/>
      <RatingCard type="blue" />
      <SeeWorld />
    </div>
  )
}

export default Home