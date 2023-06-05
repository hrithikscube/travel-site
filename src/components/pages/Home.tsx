import Header from '../Header'
import Banner from '../Banner'
import SeeWorld from '../SeeWorld'
import RatingCard from '../RatingCard'

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <SeeWorld />
      <RatingCard type="white" />
      <br />
      <RatingCard type="blue" />

    </div>
  )
}

export default Home