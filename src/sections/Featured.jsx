import { Rating } from "@mui/material";
import { ArrowRightLeft, Eye, Heart, ShoppingBag } from "lucide-react";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const tabsData = {
  featured: [
    {
      id: "1",
      category: "Mum & Baby",
      name: "Holly Organic Natural Creme",
      rating: "4",
      price: "599",
      img: "/images/featuredImgs/Creme.jpg",
    },
    {
      id: "2",
      category: "Health & First Aids",
      name: "AirPio Mucus Clearance & Lung",
      rating: "5",
      price: "999",
      img: "/images/featuredImgs/AirPio.jpg",
    },
    {
      id: "3",
      category: "Organic & Gluten Free",
      name: "Vitaly Protein Slim & Trim",
      rating: "4.5",
      price: "299",
      img: "/images/featuredImgs/Sachet.jpg",
    },
    {
      id: "4",
      category: "Organic & Gluten Free",
      name: "Go Natural Protein Cookie",
      rating: "3.5",
      price: "149",
      img: "/images/featuredImgs/NaturalCookie.jpg",
    },
    {
      id: "5",
      category: "Medicines",
      name: "Kurofen Tab X 24",
      rating: "5",
      price: "1299",
      img: "/images/featuredImgs/KurofenTab.jpg",
    },
  ],
  onSale: [
    {
      id: "1",
      category: "Mum & Baby",
      name: "Holly Organic Natural Creme",
      rating: "4",
      price: "599",
      img: "/images/featuredImgs/Creme.jpg",
    },
    {
      id: "2",
      category: "Health & First Aids",
      name: "AirPio Mucus Clearance & Lung",
      rating: "5",
      price: "999",
      img: "/images/featuredImgs/AirPio.jpg",
    },
    {
      id: "3",
      category: "Organic & Gluten Free",
      name: "Vitaly Protein Slim & Trim",
      rating: "4.5",
      price: "299",
      img: "/images/featuredImgs/Sachet.jpg",
    },
    {
      id: "4",
      category: "Organic & Gluten Free",
      name: "Go Natural Protein Cookie",
      rating: "3.5",
      price: "149",
      img: "/images/featuredImgs/NaturalCookie.jpg",
    },
    {
      id: "5",
      category: "Medicines",
      name: "Kurofen Tab X 24",
      rating: "5",
      price: "1299",
      img: "/images/featuredImgs/KurofenTab.jpg",
    },
  ],
  topRated: [
    {
      id: "1",
      category: "Mum & Baby",
      name: "Holly Organic Natural Creme",
      rating: "4",
      price: "599",
      img: "/images/featuredImgs/Creme.jpg",
    },
    {
      id: "2",
      category: "Health & First Aids",
      name: "AirPio Mucus Clearance & Lung",
      rating: "5",
      price: "999",
      img: "/images/featuredImgs/AirPio.jpg",
    },
    {
      id: "3",
      category: "Organic & Gluten Free",
      name: "Vitaly Protein Slim & Trim",
      rating: "4.5",
      price: "299",
      img: "/images/featuredImgs/Sachet.jpg",
    },
    {
      id: "4",
      category: "Organic & Gluten Free",
      name: "Go Natural Protein Cookie",
      rating: "3.5",
      price: "149",
      img: "/images/featuredImgs/NaturalCookie.jpg",
    },
    {
      id: "5",
      category: "Medicines",
      name: "Kurofen Tab X 24",
      rating: "5",
      price: "1299",
      img: "/images/featuredImgs/KurofenTab.jpg",
    },
  ],
};

const Featured = () => {
  const [activeTab, setActiveTab] = useState("featured");
  return (
    <section className="py-10 px-5 md:px-20">
      {/* Tabs */}
      <div className="flex overflow-x-auto no-scrollbar justify-start sm:justify-center gap-3 mb-10 sm:mb-14 pb-2">
        {["featured", "onSale", "topRated"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`whitespace-nowrap px-4 sm:px-6 py-2 rounded-full text-2xl 
              transition-all duration-300 font-semibold
              ${activeTab === tab ? "text-highlight" : "text-headings"}`}
          >
            {tab === "featured" && "Featured"}
            {tab === "onSale" && "On Sale"}
            {tab === "topRated" && "Top Rated"}
          </button>
        ))}
      </div>
      {/* Cards */}
      <div className="slider-div">
        <Swiper
          spaceBetween={15}
          slidesPerView={1}
          navigation
          modules={[Navigation]}
          loop={true}
          breakpoints={{
            576: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        >
          {tabsData[activeTab].map((item, index) => (
            <SwiperSlide key={item.id} className="!h-auto flex">
              <div
                key={index}
                className="relative group glass rounded-2xl overflow-hidden 
              transition-all duration-300 flex flex-col gap-4 border-2 border-gray-300 p-6 h-full hover:border-primary"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-64 object-cover p-4"
                />

                <div className="flex flex-col gap-4 flex-grow">
                  <div className="flex flex-col gap-2">
                    <p className="text-sm text-headings">{item.category}</p>
                    <h1 className="text-primary text-2xl font-bold">
                      {item.name}
                    </h1>
                    <Rating value={item.rating} precision={0.5} readOnly />
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <h1 className="text-2xl text-secondary font-bold">
                      Rs. {item.price}
                    </h1>
                    <div className="rounded-full h-10 w-10 bg-gray-300 flex items-center justify-center hover:bg-primary group">
                      <ShoppingBag className="text-headings group-hover:text-white" />
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-6">
                  <div
                    className="relative flex flex-col gap-4 -right-20 -top-10 transform translate-x-20 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-out"
                  >
                    <div className="rounded-full h-10 w-10 flex items-center justify-center bg-gray-300">
                      <ArrowRightLeft />
                    </div>
                    <div className="rounded-full h-10 w-10 flex items-center justify-center bg-gray-300">
                      <Heart />
                    </div>
                    <div className="rounded-full h-10 w-10 flex items-center justify-center bg-gray-300">
                      <Eye />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Featured;
