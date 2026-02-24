import {
  ArrowRightLeft,
  ChevronDown,
  Heart,
  Search,
  Share2,
  ShoppingBag,
  Truck,
  User,
  Menu,
  X
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Button from "../components/Button";

const navLinks = [
  { id: "1", title: "Home", href: "#" },
  { id: "2", title: "Shop", href: "#" },
  { id: "3", title: "Elements", href: "#" },
  { id: "4", title: "Blog", href: "#" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

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
          <Truck size={18} />
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

      <div className="bg-primary text-sm px-4 md:px-10 py-4 flex flex-col gap-3">
        <div className="flex flex-col items-center md:flex-row md:justify-between gap-4">
          {/* Logo */}
          <img
            src="/logo.png"
            alt="logo"
            className="h-14 min-w-[120px] object-contain"
          />

          {/* Search Bar */}
          <form className="w-full md:max-w-3xl md:mx-6 text-gray-600">
            <div className="flex relative bg-white rounded-3xl shadow-sm">
              {/* Input */}
              <input
                type="search"
                placeholder="Search product"
                className="w-full px-5 py-2 outline-none rounded-3xl"
              />

              {/* Category Dropdown */}
              <div ref={dropdownRef} className="relative">
                <button
                  type="button"
                  onClick={() => setOpen(!open)}
                  className="w-full px-4 py-2 flex items-center justify-between border-x border-gray-200 text-sm"
                >
                  <p>All Categories</p>
                  <ChevronDown size={16} />
                </button>

                {open && (
                  <div className="absolute left-0  bg-white shadow-lg rounded-md w-44 max-h-60 overflow-y-auto z-20">
                    <ul className="py-2 text-sm">
                      {[
                        "Vitamins & Supplements",
                        "Personal Care & Beauty",
                        "Medicines",
                        "Health & First Aids",
                        "Sexual Health",
                        "Weight Loss & Fitness",
                        "Mum & Baby",
                        "Organic & Gluten Free",
                        "Home & Pets",
                        "Travel",
                        "Perfumes & Gifts",
                      ].map((item) => (
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
              <span className="absolute -bottom-3 -right-2 bg-red-500 text-white text-[10px] p-1 h-5 w-5 rounded-full flex items-center justify-center  font-semibold">
                2
              </span>
            </div>
            <div className="relative">
              <Heart />
              <span className="absolute -bottom-3 -right-2 bg-red-500 text-white text-[10px] p-1 h-5 w-5 rounded-full flex items-center justify-center  font-semibold">
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

        <div className="w-full">
          {/* Top Row */}
          <div className="flex items-center justify-between w-full">
            {/* Left Side (Desktop Menu + Hamburger) */}
            <div className="flex items-center">
              {/* Desktop Menu */}
              <div className="hidden md:flex gap-10 text-white text-lg items-center">
                <div className="bg-highlight rounded-2xl flex gap-2 p-3 items-center justify-center">
                  <p>Special Deals</p>
                  <ChevronDown size={14} />
                </div>

                <div className="flex gap-10 font-semibold">
                  {navLinks.map((item) => (
                    <a
                      key={item.id}
                      className="hover:text-secondary"
                      href={item.href}
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
              </div>

              {/* Hamburger (Mobile Only) */}
              <button
                className="md:hidden text-white"
                onClick={() => setMobileMenu(!mobileMenu)}
              >
                {mobileMenu ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>

            {/* Share Button (Always Visible) */}
            <div>
              <Button
                size="md"
                className="bg-secondary text-white text-sm font-semibold flex items-center gap-2"
              >
                <Share2 size={14} />
                <p>Share & Earn $10</p>
              </Button>
            </div>
          </div>

          {/* ✅ Mobile Dropdown Menu (NOW OUTSIDE FLEX ROW) */}
          {mobileMenu && (
            <div className="md:hidden w-full text-white text-lg font-semibold px-6 py-4 space-y-3 mt-3">
              <div className="flex justify-between items-center">
                <p>Special Deals</p>
                <ChevronDown size={14} />
              </div>

              {navLinks.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="block py-2"
                  onClick={() => setMobileMenu(false)}
                >
                  {item.title}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
