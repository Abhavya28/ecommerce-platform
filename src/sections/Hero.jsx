import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import Button from "../components/Button";

const slides = [
  { id: "1", bg: "/images/hero1.png", type: "hero1" },
  { id: "2", bg: "/images/hero2.png", type: "hero2" },
  { id: "3", bg: "/images/hero3.png", type: "hero3" },
];

const Slide1 = ({ animate }) => (
  <div className="flex flex-col md:flex-row items-center justify-between w-full px-10 md:px-20 min-h-[500px]">
    <div className="text-left md:w-1/2 space-y-4">
      <div
        className={`flex font-bold text-xl md:text-2xl text-secondary gap-2 ${animate ? "fade-in fade-in-delay-1" : ""}`}
      >
        <p>
          SAVE <span className="block">UP TO</span>{" "}
        </p>
        <p>
          <span className="text-5xl md:text-6xl">30% OFF</span>
        </p>
      </div>
      <p
        className={`text-2xl md:text-5xl ${animate ? "fade-in fade-in-delay-2" : ""}`}
      >
        On All Baby Lotions
      </p>
      <Button
        className={`mt-4 bg-red-500 text-white hover:bg-red-600 transition px-12 py-4 text-xl ${animate ? "fade-in fade-in-delay-3" : ""}`}
        size="lg"
      >
        Shop Now!
      </Button>
    </div>
  </div>
);

const Slide2 = ({ animate }) => (
  <div className="flex flex-col md:flex-row items-center justify-between w-full px-10 md:px-20 min-h-[500px]">
    <div className="text-left md:w-1/2 space-y-4">
      <div
        className={`flex font-bold text-xl md:text-2xl text-secondary gap-2 ${animate ? "fade-in fade-in-delay-1" : ""}`}
      >
        <p>
          SAVE <span className="block">UP TO</span>{" "}
        </p>
        <p>
          <span className="text-5xl md:text-6xl">50% OFF</span>
        </p>
      </div>
      <p
        className={`text-2xl md:text-5xl ${animate ? "fade-in fade-in-delay-2" : ""}`}
      >
        Support Your Health With Nutrition
      </p>
      <Button
        className={`mt-4 bg-red-500 text-white hover:bg-red-600 transition px-12 py-4 text-xl ${animate ? "fade-in fade-in-delay-3" : ""}`}
        size="lg"
      >
        Shop Now!
      </Button>
    </div>
  </div>
);

const Slide3 = ({ animate }) => (
  <div className="flex flex-col md:flex-row items-center justify-between w-full px-10 md:px-20 min-h-[500px]">
    <div className="text-left md:w-1/2 space-y-4">
      <div
        className={`flex font-bold text-xl md:text-2xl text-secondary gap-2 ${animate ? "fade-in fade-in-delay-1" : ""}`}
      >
        <p>
          SAVE <span className="block">UP TO</span>{" "}
        </p>
        <p>
          <span className="text-5xl md:text-6xl">30% OFF</span>
        </p>
      </div>
      <p
        className={`text-2xl md:text-5xl ${animate ? "fade-in fade-in-delay-2" : ""}`}
      >
        Natural Cosmetics
      </p>
      <Button
        className={`mt-4 bg-red-500 text-white hover:bg-red-600 transition px-12 py-4 text-xl ${animate ? "fade-in fade-in-delay-3" : ""}`}
        size="lg"
      >
        Shop Now!
      </Button>
    </div>
  </div>
);

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Swiper
      slidesPerView={1}
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      speed={1000}
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      style={{ transitionTimingFunction: "ease-in-out" }}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={slide.id}>
          <div
            className="relative min-h-screen flex items-center justify-center bg-[#DAEDF1] bg-no-repeat bg-center bg-contain"
            style={{ backgroundImage: `url(${slide.bg})` }}
          >
            <div className="relative w-full z-10">
              {slide.type === "hero1" && (
                <Slide1 animate={index === activeIndex} />
              )}

              {slide.type === "hero2" && (
                <Slide2 animate={index === activeIndex} />
              )}

              {slide.type === "hero3" && (
                <Slide3 animate={index === activeIndex} />
              )}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;
