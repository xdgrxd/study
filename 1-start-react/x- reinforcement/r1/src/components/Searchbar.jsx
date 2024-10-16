const Searchbar = () => {
  
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="searchBar">
      <input type="text" />
      <input type="submit" value="Search" />
    </form>
  );
};

export default Searchbar;
