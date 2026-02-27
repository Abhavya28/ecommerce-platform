import './index.css'
import Navbar from './layouts/Navbar'
import Discounts from './sections/Discounts'
import Featured from './sections/Featured'
import Hero from './sections/Hero'
import Newsletter from './sections/Newsletter'
import PopularCategories from './sections/PopularCategories'
import Testimonials from './sections/Testimonials'

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
    </div>
  )
}

export default App
