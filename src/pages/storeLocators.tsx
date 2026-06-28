import React, { useState } from "react";
import "./storeLocators.css";
import { FaMapMarkerAlt, FaSearch, FaPhone } from "react-icons/fa";
import { storeLocations, StoreLocation } from "../data/storeLocators";
import Footer from '../components/Footer/Footer';

const StoreLocator: React.FC = () => {
  const [query, setQuery] = useState("");

  // Filter locations by city, state, or area
  const filteredLocations = storeLocations.filter((loc: StoreLocation) =>
    `${loc.city} ${loc.state} ${loc.area}`
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  return (<>
    <section className="store-locator">


      <div className="locator-tag">
        <FaMapMarkerAlt className="locator-icon" />
        <span>STORE LOCATOR</span>
      </div>

      <h1 className="locator-title">
        FIND A <span className="highlight">CLEAN & DRY</span> STORE<br />NEAR YOU
      </h1>

      <p className="locator-description">
        Search by City, State, or Area to discover nearby stores, contact numbers,
        and get instant directions.
      </p>

      {/* Search Bar */}
      <div className="search-bar">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Enter City, State or Locality..."
          className="search-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {/* Results */}
      <div className="results">
        {filteredLocations.length > 0 ? (
          filteredLocations.map((loc) => (
            <div key={loc.id} className="store-card">
              <h3>{loc.city}, {loc.state}</h3>
              <p><strong>Area:</strong> {loc.area}</p>
              <p><strong>Address:</strong> {loc.address}</p>
              <p><strong>Timings:</strong> {loc.timings}</p>
             <p>
  <FaPhone style={{ marginRight: 6, transform: "rotate(90deg)" }} />
  <a href={`tel:${loc.phone}`}>{loc.phone}</a>
</p>
            </div>
          ))
        ) : (
          <p className="no-results">No stores found for your search.</p>
        )}
      </div>
    </section>
    <Footer />
  </>);
};

export default StoreLocator;
