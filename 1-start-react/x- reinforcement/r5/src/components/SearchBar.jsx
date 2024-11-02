import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const searchItem = (e) => {
    e.preventDefault();
    
    navigate(`/search?q=${query}`);
  };

  return (
    <form onSubmit={searchItem}>
      <input
        type="text"
        placeholder="Insert anything..."
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
      <input type="submit" value="Search" />
    </form>
  );
};

export default SearchBar;
