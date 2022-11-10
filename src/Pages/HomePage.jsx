import React from "react";
import "./HomePage.css";
import data from "../dummyData.json";
import PropertyCompo from "../Components/PropertyCompo";

const HomePage = () => {
  return (
    <>
      <div className="searchPannel">
        <div className="search">
          <h2>Search properties to rent</h2>
          <input placeholder="Search with Search Bar" />
        </div>
        <div className="searchOptions">
          <div className="searchBlocks searchBlocks-f">
            <label>Location</label>
            <input placeholder="Location" />
          </div>
          <div className="searchBlocks">
            <label>When</label>
            <input placeholder="Select Move-in Date" type="date" />
          </div>
          <div className="searchBlocks">
            <label>Price</label>
            <select name="price" id="price">
              <option>$500-$1500</option>
              <option>$1500-$3500</option>
              <option>$3500-$5000</option>
            </select>
          </div>
          <div className="searchBlocks">
            <label>Property Type</label>
            <select name="type" id="type">
              <option>Villa</option>
              <option>Bungalow</option>
              <option>skyscraper</option>
              <option>Mansion</option>
              <option>cottage</option>
              <option>Appartment</option>
            </select>
          </div>
          <div className="searchBlocks searchButton searchBlocks-l">
            <button className="button">Search</button>
          </div>
        </div>
      </div>
      <div id="properties">
        {data.map((e, index) => (
          <PropertyCompo key={index} property={e} />
        ))}
      </div>
    </>
  );
};

export default HomePage;
