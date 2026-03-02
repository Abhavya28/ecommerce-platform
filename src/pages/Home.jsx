import Discounts from '../sections/Discounts'
import Featured from '../sections/Featured'
import Follow from '../sections/Follow'
import Hero from '../sections/Hero'
import Newsletter from '../layouts/Newsletter'
import PopularCategories from '../sections/PopularCategories'
import Testimonials from '../sections/Testimonials'
import Features from '../sections/Features'


const Home = () => {
  return (
    <div>
      <Hero />
      <PopularCategories />
      <Featured />
      <Discounts />
      <Newsletter />
      <Testimonials />
      <Follow />
      <Features />
    </div>
  )
}

export default Home
