import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const searchChange = (inputContent) => {
    setQuery(inputContent);
    navigate(`/search?q=${query}`);
  };

  return (
    <form>
      <input
        type="text"
        value={query}
        onChange={(e) => searchChange(e.target.value)}
        placeholder="Search anything..."
      />
      <input type="submit" value="Search" />
    </form>
  );
};

export default SearchBar;
