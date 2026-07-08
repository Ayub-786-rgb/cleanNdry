import React, { useState, useEffect, useRef } from "react";
import "./storeLocators.css";
import { FaMapMarkerAlt, FaSearch, FaPhone } from "react-icons/fa";
import { storeLocations, StoreLocation } from "../data/storeLocators";
import Footer from '../components/Footer/Footer';

const StoreLocator: React.FC = () => {
  const [query, setQuery] = useState("");
  const [filteredLocations, setFilteredLocations] = useState<StoreLocation[]>([]);
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Debounced search function - show all data after debounce
  useEffect(() => {
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    debounceTimerRef.current = setTimeout(() => {
      if (query.trim() === "") {
        setFilteredLocations([]);
      } else {
        // Show all existing locations regardless of query
        setFilteredLocations(storeLocations);
      }
    }, 1000); // 1000ms (1 second) debounce delay

    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, [query]);

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
