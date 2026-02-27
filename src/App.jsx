import './index.css'
import Navbar from './layouts/Navbar'
import Discounts from './sections/Discounts'
import Featured from './sections/Featured'
import Follow from './sections/Follow'
import Hero from './sections/Hero'
import Newsletter from './layouts/Newsletter'
import PopularCategories from './sections/PopularCategories'
import Testimonials from './sections/Testimonials'
import Features from './sections/Features'

function App() {

  return (
    <div>
      <Navbar />
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

export default App
