import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [userQuery, setUserQuery] = useState();
  const navigate = useNavigate();

  const searchData = (e) => {
    e.preventDefault();

    navigate(`/search?q=${userQuery}`);
  };

  return (
    <form onSubmit={searchData}>
      <input type="text" onChange={(e) => setUserQuery(e.target.value)} />
      <input type="submit" value="Search" />
    </form>
  );
};

export default SearchBar;
