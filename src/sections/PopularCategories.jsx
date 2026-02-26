import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation} from "swiper/modules";

const categories = [
  {
    id: "1",
    bgcolor: "#D94945",
    title: "Health & First Aids",
    img: "/images/vitamins.png",
  },
  {
    id: "2",
    bgcolor: "#75BF7A",
    title: "Weight Loss & Fitness",
    img: "/images/weightloss.png",
  },
  {
    id: "3",
    bgcolor: "#26658C",
    title: "Vitamins & Supplements",
    img: "/images/vitamins.png",
  },
  {
    id: "4",
    bgcolor: "#4ABFD9",
    title: "Personal Care & Beauty",
    img: "/images/personalcare.png",
  },
  {
    id: "5",
    bgcolor: "#46A69C",
    title: "Medicines",
    img: "/images/weightloss.png",
  },
  {
    id: "6",
    bgcolor: "#D9A934",
    title: "Sexual Health",
    img: "/images/personalcare.png",
  },
  {
    id: "7",
    bgcolor: "#26658C",
    title: "Vitamins & Supplements",
    img: "/images/vitamins.png",
  },
  {
    id: "8",
    bgcolor: "#4ABFD9",
    title: "Personal Care & Beauty",
    img: "/images/personalcare.png",
  },
];

const PopularCategories = () => {
  return (
    <section className="py-16 px-5 md:px-20">
      <h1 className="text-xl md:text-2xl font-bold mb-10 text-center">
        Explore Popular Categories
      </h1>

      <div className="slider-div">

      <Swiper
        spaceBetween={10}
        navigation
        modules={[Navigation,]}
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
          slidesPerView: 5,
          spaceBetween: 20,
        },
      }}
      >
        {categories.map((category) => (
          <SwiperSlide key={category.id}>
            <div
              className="rounded-2xl h-56 w-56 flex flex-col justify-between p-6 text-white relative overflow-hidden text-center"
              style={{ backgroundColor: category.bgcolor }}
            >
              <h2 className="text-lg font-semibold flex items-center justify-center">
                {category.title}
              </h2>

              <div className="bg-[#EDF1F2] h-14 absolute -bottom-2 left-0 w-full"></div>
              <img
                src={category.img}
                alt={category.title}
                className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-48 h-48 object-contain z-10"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </section>
  );
};

export default PopularCategories;
