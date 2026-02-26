import './index.css'
import Navbar from './layouts/Navbar'
import Discounts from './sections/Discounts'
import Featured from './sections/Featured'
import Hero from './sections/Hero'
import Newsletter from './sections/Newsletter'
import PopularCategories from './sections/PopularCategories'

function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <PopularCategories />
      <Featured />
      <Discounts />
      <Newsletter />
    </div>
  )
}

export default App
