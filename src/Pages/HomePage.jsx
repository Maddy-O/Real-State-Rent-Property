import React, { useEffect, useState } from "react";
import "./HomePage.css";
import data from "../dummyData.json";
import PropertyCompo from "../Components/PropertyCompo";

const HomePage = () => {
  const [allProperty, setAllProperty] = useState(data);
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("2022-11-10");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");

  const search = () => {
    let searchData = data;
    let searchLocation2 = searchData.filter(
      (e) => e.location.country === location
    );
    searchData = searchLocation2;
    let searchDate2 = searchData.filter((e) => {
      return new Date(e.when) - new Date(date) > 0;
    });
    searchData = searchDate2;
    let c = price.split("-");
    let searchPrice2 = searchData.filter((e) => {
      const aa = e.price.split("$");
      const num = parseFloat(aa[1].replace(",", ""));
      let a = price.split("-");
      return num >= Number(a[0]) && num <= Number(a[1]);
    });
    searchData = searchPrice2;
    let searchType2 = searchData.filter((e) => e.type === type);
    searchData = searchType2;
    setAllProperty(searchData);
    console.log(searchData);
  };

  useEffect(() => {}, []);

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
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="searchBlocks">
            <label>When</label>
            <input
              placeholder="Select Move-in Date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="searchBlocks">
            <label>Price</label>
            <select
              name="price"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            >
              <option value="500-5000">All</option>
              <option value="500-1500">$500-$1500</option>
              <option value="1500-3500">$1500-$3500</option>
              <option value="3500-5000">$3500-$5000</option>
            </select>
          </div>
          <div className="searchBlocks">
            <label>Property Type</label>
            <select
              name="type"
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value={"Villa"}>Villa</option>
              <option value={"Bungalow"}>Bungalow</option>
              <option value={"Skyscraper"}>Skyscraper</option>
              <option value={"Mansion"}>Mansion</option>
              <option value={"Cottage"}>Cottage</option>
              <option value={"Appartment"}>Appartment</option>
            </select>
          </div>
          <div className="searchBlocks searchButton searchBlocks-l">
            <button className="button" onClick={search}>
              Search
            </button>
          </div>
        </div>
      </div>
      <div id="properties">
        {allProperty.map((e, index) => (
          <PropertyCompo key={index} property={e} />
        ))}
      </div>
    </>
  );
};

export default HomePage;
