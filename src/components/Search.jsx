function Search() {
  const handleInputChange = (event) => {
    handleSearch(event.target.value);

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search beers..."
        onChange={handleInputChange}
      />
    </div>
  );
}
}
export default Search;
