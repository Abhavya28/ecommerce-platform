import "./index.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Newsletter from "./layouts/Newsletter";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
