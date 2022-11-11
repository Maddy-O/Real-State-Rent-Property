import React, { useState } from "react";
import "./HomePage.css";
import data from "../dummyData.json";
import PropertyCompo from "../Components/PropertyCompo";

const HomePage = () => {
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("2022-11-10");
  const [price, setPrice] = useState("");

  const searchLocation = (e) => {
    setLocation(e);
    let country = data.filter((e) => e.location.country === location);
    let city = data.filter((e) => e.location.city === location);
    if (country) {
    }
    console.log(country, city);
  };

  const searchDate = (e) => {
    console.log(new Date(e) - new Date("2022-12-12"));
    setDate(e);
    let checkDate = data.filter(
      (e) => new Date(date) - new Date(e.location.date) < 0
    );
    console.log(checkDate);
  };

  const searchPrice = (e) => {
    setPrice(e);
    let c = e.split("-");
    console.log(c);
    let checkPrice = data.filter((e) => {
      let a = e.price.split("$");
      return Number(a[1]) >= Number(c[0]) && Number(a[1]) <= Number(c[1]);
    });
    console.log(checkPrice);
  };

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
            <input
              placeholder="Location"
              type="text"
              value={location}
              onChange={(e) => searchLocation(e.target.value)}
            />
          </div>
          <div className="searchBlocks">
            <label>When</label>
            <input
              placeholder="Select Move-in Date"
              type="date"
              value={date}
              onChange={(e) => searchDate(e.target.value)}
            />
          </div>
          <div className="searchBlocks">
            <label>Price</label>
            <select
              name="price"
              id="price"
              value={price}
              onChange={(e) => searchPrice(e.target.value)}
            >
              <option value="500-5000">All</option>
              <option value="500-1500">$500-$1500</option>
              <option value="1500-3500">$1500-$3500</option>
              <option value="3500-5000">$3500-$5000</option>
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
