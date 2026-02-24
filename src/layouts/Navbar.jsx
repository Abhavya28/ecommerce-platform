import {
  ArrowRightLeft,
  ChevronDown,
  Heart,
  Search,
  ShoppingBag,
  Truck,
  User,
} from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="">
      <div className="flex flex-col items-center md:flex-row md:justify-between text-sm px-4 md:px-10 py-2 gap-2">
        <div className="">
          <p>
            Customer Support:{" "}
            <span className="text-primary font-bold">+1 800 559 6580</span>
          </p>
          <p>
            Email Us:{" "}
            <span className="text-primary font-bold">info@companyname.com</span>
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <Truck />
          <p>
            <span className="font-bold">Free Shipping</span> on US Orders Over
            $49
          </p>
        </div>
        <div className="flex gap-6 items-center justify-center text-primary font-semibold">
          <div className="flex gap-2 items-center justify-center">
            <a href="#">About</a>
            <div className="h-4 w-px bg-gray-400"></div>
            <a href="#">FAQ</a>
            <div className="h-4 w-px bg-gray-400"></div>
            <a href="#">Contact</a>
          </div>
          <div className="flex gap-6 items-center justify-center">
            <div className="flex gap-1 items-center justify-center">
              <p>English</p>
              <ChevronDown className="h-4 w-4" />
            </div>
            <div className="flex gap-1 items-center justify-center">
              <p>USD</p>
              <ChevronDown className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary text-sm px-4 md:px-10 py-3">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Logo */}
          <img
            src="/logo.png"
            alt="logo"
            className="h-16 min-w-[120px] object-contain"
          />

          {/* Search Bar */}
          <form className="w-full md:max-w-2xl md:mx-6 text-gray-600">
            <div className="flex relative bg-white rounded-3xl overflow-hidden shadow-sm">
              {/* Input */}
              <input
                type="search"
                placeholder="Search product"
                className="w-full px-5 py-2 outline-none"
              />

              {/* Category Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setOpen(!open)}
                  className="w-full px-4 py-2 flex items-center gap-1 border-x border-gray-200 text-sm"
                >
                  <p>All Categories</p>
                  <ChevronDown size={16} />
                </button>

                {open && (
                  <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md w-44 z-20">
                    <ul className="py-2 text-sm">
                      {["Shopping", "Images", "News", "Finance"].map((item) => (
                        <li key={item}>
                          <button
                            type="button"
                            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                            onClick={() => setOpen(false)}
                          >
                            {item}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Search Button */}
              <button
                type="submit"
                className="px-5 py-2 flex items-center justify-center"
              >
                <Search className="text-secondary" size={18} />
              </button>
            </div>
          </form>

          {/* Icons */}
          <div className="flex gap-8 text-white">
            <div className="relative">
              <ArrowRightLeft />
              <span className="absolute -bottom-4 -right-2 bg-red-500 text-white text-[10px] p-1 h-5 w-5 rounded-full flex items-center justify-center  font-semibold">
                2
              </span>
            </div>
            <div className="relative">
              <Heart />
              <span className="absolute -bottom-4 -right-2 bg-red-500 text-white text-[10px] p-1 h-5 w-5 rounded-full flex items-center justify-center  font-semibold">
                5
              </span>
            </div>
            <div className="relative">
              <a href="#">
                <User />
              </a>
            </div>
            <div>
              <a href="#">
                <ShoppingBag />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="text-white text-lg">
                <div className="bg-highlight rounded-2xl flex gap-2 p-3 items-center justify-center">
                    <p>Special Deals</p>
                    <ChevronDown size={14}/>
                </div>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
