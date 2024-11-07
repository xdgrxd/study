import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const searchItem = (e) => {
    e.preventDefault();

    navigate(`/search?=${query}`);
  };

  return (
    <form onSubmit={searchItem}>
      <input
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        placeholder="Insert something..."
      />

      <input type="submit" value="Search" />
    </form>
  );
};

export default SearchBar;
