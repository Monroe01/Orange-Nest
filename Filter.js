import React, { useState } from 'react';

function Filter({ onFilterChange }) {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleFilterChange = () => {
    onFilterChange({ minPrice, maxPrice });
  };

  return (
    <div className="filter-container">
      <h2>Filter Listings</h2>
      <div className="filter-item">
        <label>Min Price: </label>
        <input
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          placeholder="Minimum Price"
        />
      </div>
      <div className="filter-item">
        <label>Max Price: </label>
        <input
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          placeholder="Maximum Price"
        />
      </div>
      <button onClick={handleFilterChange}>Apply Filters</button>
    </div>
  );
}

export default Filter;