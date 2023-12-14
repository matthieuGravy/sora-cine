import React, { useState, useEffect } from "react";

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [error, setError] = useState(null);
  const [dataFetched, setDataFetched] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3200/series");

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }

      const data = await response.json();

      // Filter the data based on the search term
      const filteredData = data.message.filter((item) =>
        item.name.toLowerCase().startsWith(searchTerm.toLowerCase())
      );

      // Sort the filtered data by popularity
      const sortedData = filteredData.sort(
        (a, b) => b.popularity - a.popularity
      );

      // Limit the results to a maximum of 5
      const limitedResults = sortedData.slice(
        0,
        Math.min(5, sortedData.length)
      );

      // Set the results with the limited and sorted data
      setResults(limitedResults);
      setShowResults(searchTerm.trim() !== "" && limitedResults.length > 0);
      setDataFetched(true);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error.message);
      setShowResults(false);
      setDataFetched(false);
    }
  };

  useEffect(() => {
    if (searchTerm.trim() !== "") {
      fetchData();
    } else {
      setResults([]);
      setShowResults(false);
      setDataFetched(false);
    }
  }, [searchTerm]);

  return (
    <div className="search-container">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search series..."
        className="search-input text-sm text-black focus:outline-none px-1"
      />

      {error && <p className="error-message">Error: {error}</p>}

      {showResults && (
        <div className="results-container absolute bg-gradient-to-b from-gray-900 p-5 rounded-2xl">
          {results.map((result) => (
            <div key={result._id} className="result-item flex items-center">
              <img
                src={result.poster_path}
                alt={result.name}
                className={`result-image pb-3 ${dataFetched ? "w-16" : ""}`}
              />
              <p className="result-name ml-2">{result.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
