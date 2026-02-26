import './index.css'
import Navbar from './layouts/Navbar'
import Featured from './sections/Featured'
import Hero from './sections/Hero'
import PopularCategories from './sections/PopularCategories'

function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <PopularCategories />
      <Featured />
    </div>
  )
}

export default App
