import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";

const brands = [
  "/images/brands/colgate.png",
  "/images/brands/dermaco.png",
  "/images/brands/dove.jpg",
  "/images/brands/plum.jpg",
  "/images/brands/nyka.png",
  "/images/brands/dotandkey.jpeg",
  "/images/brands/colgate.png",
  "/images/brands/dermaco.png",
  "/images/brands/dove.jpg",
  "/images/brands/plum.jpg",
  "/images/brands/nyka.png",
  "/images/brands/dotandkey.jpeg",
  "/images/brands/colgate.png",
  "/images/brands/dermaco.png",
  "/images/brands/dove.jpg",
  "/images/brands/plum.jpg",
  "/images/brands/nyka.png",
  "/images/brands/dotandkey.jpeg",
];

const customerReviews = [
  {
    id: "1",
    title: "Good Price",
    desc: "Good price and quality products which have changed my skin and hair.",
    img: "/images/Customers/Archie.png",
    name: "Archie Mehta",
    city: "Chandigarh",
  },
  {
    id: "2",
    title: "Fast Delivery",
    desc: "Fast delivery and also received free product samples to try.",
    img: "/images/Customers/Kenneth.png",
    name: "Kenneth Goyal",
    city: "Hisar",
  },
  {
    id: "3",
    title: "Easy Handling",
    desc: "Quick and easy to order as always with great support from the team.",
    img: "/images/Customers/Malanie.png",
    name: "Malanie Garg",
    city: "Kullu",
  },
];

// Convert array into pairs (2 per column) for Featured Brands Swiper
const chunkBrands = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const Testimonials = () => {
  const brandColumns = chunkBrands(brands, 2);
  return (
    <section className="py-10 px-5 md:px-20">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Featured Brands */}
        <div className="relative px-5 py-10 w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-center">Featured Brands</h2>
          <div className="slider-div">
            <Swiper
              modules={[Navigation]}
              slidesPerView={3}
              slidesPerGroup={1}
              spaceBetween={30}
              navigation
              loop={true}
              className="max-w-2xl mx-auto"
            >
              {brandColumns.map((column, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col gap-6">
                    {column.map((brand, i) => (
                      <div
                        key={i}
                        className="bg-white border rounded-2xl h-40 flex items-center justify-center shadow-sm"
                      >
                        <img
                          src={brand}
                          alt="brand"
                          className="max-h-16 object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Customer Reviews */}
        <div className="relative px-5 py-10 w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-center">Customer Reviews</h2>
          <div className="slider-div">
            <Swiper
              spaceBetween={20}
              navigation
              loop={true}
              modules={[Navigation]}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1200: {
                  slidesPerView: 2,
                },
              }}
            >
              {customerReviews.map((item, index) => (
                <SwiperSlide key={item.id} className="flex h-auto">
                  <div
                    key={index}
                    className="relative group glass rounded-2xl overflow-hidden transition-all duration-300 flex flex-col gap-8 bg-[#ECF6F5] p-6 md:p-8 hover:border-primary h-full"
                  >
                    <div className="flex flex-col gap-4 flex-1">
                      <h1 className="font-semibold text-xl">{item.title}</h1>
                      <p className="text-headings">{item.desc}</p>
                    </div>
                    <div className="flex gap-4 items-center mt-auto">
                      <div className="rounded-full h-16 w-16">
                        <img
                          src={item.img}
                          alt={item.name}
                          className="rounded-full object-contain"
                        />
                      </div>
                      <div className="gap-2">
                        <h1 className="font-semibold text-lg">{item.name}</h1>
                        <h1 className="text-headings">{item.city}</h1>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
