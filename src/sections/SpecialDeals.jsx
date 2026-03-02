import { useEffect, useRef, useState } from "react";
import { specialDeals } from "../data/data";

export default function SpecialDeals({ showDeals, setShowDeals }) {
  const menuRef = useRef(null);
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    if (!showDeals) return;

    function handleOutsideClick(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowDeals(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showDeals, setShowDeals]);

  if (!showDeals) return null;

  return (
    <div ref={menuRef} className="relative flex text-primary gap-2">
      
      {/* LEFT MENU */}
      <div className="w-64 bg-white shadow-md rounded">
        <ul>
          {specialDeals.map((item) => (
            <li
              key={item.id}
              className={`p-3 cursor-pointer hover:bg-gray-100 ${
                activeItem?.id === item.id
                  ? "bg-gray-100 font-semibold"
                  : ""
              }`}
              onMouseEnter={() => setActiveItem(item)}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>

      {/* RIGHT SUB MENU */}
      {activeItem?.subMenu && (
        <div className="w-[1200px] shadow-lg p-6 bg-white">
          <div className="grid grid-cols-3 gap-4">
            {activeItem.subMenu.map((sub) => (
              <div
                key={sub.id}
                className="hover:text-teal-600 cursor-pointer text-lg"
              >
                {sub.title}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}