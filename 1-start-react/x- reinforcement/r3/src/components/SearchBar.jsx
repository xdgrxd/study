import React from "react";

import { useState } from "react";
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
        name=""
        id=""
        placeholder="Find anything here..."
        onChange={(e) => setQuery(e.target.value)}
      />
      <input type="submit" value="Search" />
    </form>
  );
};

export default SearchBar;
