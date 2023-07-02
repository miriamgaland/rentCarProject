import React, { useState } from 'react';
import './CarSearch.css'

function CarSearch(props) {
  const [location, setLocation] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();

    props.filterCars(minPrice == "" ? 0 : Number(minPrice),
      maxPrice == "" ? 100000000000 : Number(maxPrice), location)
    props.setShowSearch(true)
  }

  return (
    <div>
      {/* <h2> Car Search </h2>  */}
      <form id="search-form" onSubmit={handleSearch}>
        <div style={{display:"flex",flexDirection:"row"}}>
          <div className="input">
            <span className="span"> Location:</span>
            <input type="text" value={location} onChange={(event) => setLocation(event.target.value)} />
          </div>
          <div className="input">
            <span className="span">Min Price:</span>
            <input type="number" value={minPrice} onChange={(event) => setMinPrice(event.target.value)} />
          </div>
          <div className="input">
            <span className="span">Max Price:</span>
            <input type="number" value={maxPrice} onChange={(event) => setMaxPrice(event.target.value)} />
          </div>
        </div>
        <div>
          <button type="submit">Search</button>
        </div>
      </form>
    </div>
  );
}

export default CarSearch;
