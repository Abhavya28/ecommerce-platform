import { useEffect, useRef, useState } from "react";
import Button from "../components/Button";
import {
  ArrowRightLeft,
  ChevronDown,
  Eye,
  Grid,
  Grid3X3,
  Heart,
  LayoutGrid,
  List,
  ShoppingBag,
} from "lucide-react";
import { shopGrid } from "../data/data";
import { Rating, Slider } from "@mui/material";
import ProductCategories from "../sections/ProductCategories";

const Shop = () => {
  const [sortOpen, setSortOpen] = useState(false);
  const [cols, setCols] = useState(4);
  const [value, setValue] = useState([0, 5000]);
  const isList = cols === 1;
  const dropdownRef = useRef(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const formatPrice = (num) => {
    return num.toLocaleString();
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setSortOpen(false);
      }
    }

    if (sortOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sortOpen]);
  return (
    <div className="">
      <div className="bg-[#ECF6F5] px-4 py-6 md:px-20 md:py-10 flex flex-col gap-4">
        <p className="text-headings">
          <a href="/" className="text-primary">
            Home{" "}
          </a>{" "}
          /{" "}
        </p>
        <h1 className="text-4xl text-headings font-semibold">Shop</h1>
      </div>

      <div className="flex flex-col md:flex-row px-4 py-6 md:px-20 md:py-10">
        {/* Left */}
        <div className="w-full md:w-[75%]">
          <div className="bg-[#27678D] p-12 rounded-2xl flex flex-col gap-6">
            <div>
              <h1 className="text-secondary font-bold text-xl">
                SAVE UP TO
                <br />
                <span className="text-6xl">40% OFF</span>
              </h1>
              <h1 className="text-white text-6xl">
                On All Selected <br />
                Products
              </h1>
            </div>
            <div>
              <Button className="bg-secondary text-white text-lg" size="lg">
                Shop Now!
              </Button>
            </div>
          </div>

          {/* Product Grid */}
          <div className="py-8">
            <div className="flex flex-col md:flex-row justify-between gap-4 text-lightgray">
              <p>Showing 1-24 of 36 results</p>
              {/* Buttons and Sort By*/}
              <div className="flex justify-between gap-6">
                {/* Buttons */}
                <div className="flex gap-3 mb-6">
                  <button
                    onClick={() => setCols(1)}
                    className="px-2 py-2 bg-[#EDF1F2] rounded-xl"
                  >
                    <List strokeWidth={2} className="text-lightgray" />
                  </button>
                  <button
                    onClick={() => setCols(2)}
                    className="px-2 py-2 bg-[#EDF1F2] rounded-xl"
                  >
                    <LayoutGrid strokeWidth={2} className="text-lightgray" />
                  </button>
                  <button
                    onClick={() => setCols(3)}
                    className="px-2 py-2 bg-[#EDF1F2] rounded-xl"
                  >
                    <Grid3X3 strokeWidth={2} className="text-lightgray" />
                  </button>
                  <button
                    onClick={() => setCols(4)}
                    className="px-2 py-2 bg-[#EDF1F2] rounded-xl"
                  >
                    <Grid strokeWidth={2} className="text-lightgray" />
                  </button>
                </div>

                {/* Sort By Dropdown*/}
                <div ref={dropdownRef} className="relative">
                  <button
                    type="button"
                    onClick={() => setSortOpen(!sortOpen)}
                    className="w-full px-10 py-2 flex items-center justify-between border-2 border-lightgray rounded-2xl text-sm gap-2 text-lightgray"
                  >
                    <p>Sort By</p>
                    <ChevronDown size={16} />
                  </button>

                  {sortOpen && (
                    <div className="absolute left-0 bg-white shadow-lg rounded-md w-44 max-h-60 overflow-y-auto z-20">
                      <ul className="py-2 text-sm">
                        {["Option 1", "Option 2", "Option 3"].map((item) => (
                          <li key={item}>
                            <button
                              type="button"
                              className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                              onClick={() => setSortOpen(false)}
                            >
                              {item}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/*  Grid */}
            <div
              className={`grid transition-all duration-300 ${
                cols === 1
                  ? "grid-cols-1"
                  : cols === 2
                    ? "grid-cols-1 sm:grid-cols-2"
                    : cols === 3
                      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
              }`}
            >
              {shopGrid.map((item) => (
                <div
                  key={item.id}
                  className={`relative group glass overflow-hidden transition-all duration-300 border border-gray-200 p-6 h-full hover:border-primary ${isList ? "flex flex-row gap-8 items-center" : "flex flex-col gap-4"}`}
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className={`w-full h-64 object-cover p-4"
                    ${isList ? "w-72 h-72 object-none" : "w-full h-64 "}`}
                  />

                  <div
                    className={`flex flex-col gap-4 flex-grow ${isList ? "justify-between" : ""}`}
                  >
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

                  <div className="absolute inset-0 opacity-0 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-6">
                    <div className="relative flex flex-col gap-4 -right-20 -top-10 transform translate-x-20 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-out">
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
              ))}
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="w-full md:w-[25%] p-6 md:p-12 flex flex-col gap-10">
          <ProductCategories />

          {/* Filter */}
          <div className="flex flex-col gap-2 items-start">
            <h1 className="text-xl font-bold text-headings">Filter by Price</h1>
            <Slider
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              min={0}
              max={5000}
              sx={{
                color: "#4ABFD9",
              }}
            />
            <p className="text-headings">
              Price: ₹{formatPrice(value[0])} - ₹{formatPrice(value[1])}
            </p>

            <Button className="text-white font-semibold bg-secondary hover:opacity-80">
              Filter
            </Button>
          </div>

          {/* Brands */}
          <div className="flex flex-col gap-4 items-start text-primary">
            <h1 className="text-xl font-bold text-headings">Brands</h1>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-6 h-6" />
              <span className="text-primary font-semibold">
                Alka Seltzer (5)
              </span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-6 h-6" />
              <span className="text-primary font-semibold">Betavit (6)</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-6 h-6" />
              <span className="text-primary font-semibold">Cepacol (19)</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-6 h-6" />
              <span className="text-primary font-semibold">Cepacol (19)</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-6 h-6" />
              <span className="text-primary font-semibold">Cepacol (19)</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-6 h-6" />
              <span className="text-primary font-semibold">Cepacol (19)</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-6 h-6" />
              <span className="text-primary font-semibold">
                Alka Seltzer (5)
              </span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-6 h-6" />
              <span className="text-primary font-semibold">Betavit (6)</span>
            </label>
          </div>

          {/* By Rating */}
          <div className="flex flex-col gap-4 items-start text-primary">
            <h1 className="text-xl font-bold text-headings">By Rating</h1>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-6 h-6" />
              <span className="text-headings text-sm  font-semibold flex items-end gap-2">
                <Rating name="read-only" defaultValue={5} readOnly />
                (8)
              </span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-6 h-6" />
              <span className="text-headings text-sm  font-semibold flex items-end gap-2">
                <Rating name="read-only" defaultValue={4} readOnly />
                (3)
              </span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-6 h-6" />
              <span className="text-headings text-sm  font-semibold flex items-end gap-2">
                <Rating name="read-only" defaultValue={3} readOnly />
                (1)
              </span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-6 h-6" />
              <span className="text-headings text-sm  font-semibold flex items-end gap-2">
                <Rating name="read-only" defaultValue={2} readOnly />
                (0)
              </span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-6 h-6" />
              <span className="text-headings text-sm  font-semibold flex items-end gap-2">
                <Rating name="read-only" defaultValue={1} readOnly />
                (2)
              </span>
            </label>
          </div>

          {/* Availability */}
          <div className="flex flex-col gap-4 items-start text-primary">
            <h1 className="text-xl font-bold text-headings">Availability</h1>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-6 h-6" />
              <span className="text-primary font-semibold">In stock</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-6 h-6" />
              <span className="text-primary font-semibold">On sale</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-6 h-6" />
              <span className="text-primary font-semibold">
                Exclude: On backorder
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
