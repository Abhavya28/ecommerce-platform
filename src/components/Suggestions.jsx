import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchTerm } from "../redux/filterSlice";

const Suggestions = ({ suggestions, setSearch, setShowSuggestions }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!suggestions.length) return null;

  return (
    <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-md mt-1 z-50">
      {suggestions.map((item) => (
        <div
          key={item.id}
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
          onClick={(e) => {
            e.stopPropagation(); 
            setSearch(item.name);
            setShowSuggestions(false);
            dispatch(setSearchTerm(item.name));
            navigate("/shop");
          }}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default Suggestions;
