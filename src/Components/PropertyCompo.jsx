import React from "react";
import "./PropertyCompo.css";

const PropertyCompo = ({ property, remove }) => {
  const handleAddFavProperty = (name) => {
    let items = JSON.parse(localStorage.getItem("favProperty")) || [];
    const ind = items.findIndex((i) => i.name == name);
    if (ind) {
      items.push(property);
      localStorage.setItem("favProperty", JSON.stringify(items));
    }
  };

  const handleRemove = (name) => {
    let items = JSON.parse(localStorage.getItem("favProperty")) || [];
    const ind = items.findIndex((i) => i.name == name);
    items.splice(ind, 1);
    if (ind) {
      localStorage.setItem("favProperty", JSON.stringify(items));
    }
  };

  return (
    <div className="propertyContainer">
      <div
        style={{
          backgroundColor: `${property.img}`,
        }}
        className="propertyImage"
      ></div>
      <div className="propertyDescPart">
        <div className="priceAndButton">
          <p style={{ marginBottom: "5px" }}>
            <b style={{ fontSize: "20px", color: "#7165eb" }}>
              {property.price}
            </b>
            /month
          </p>
          {remove ? (
            <button
              className="propertyButton"
              onClick={() => handleRemove(property.name)}
            >
              x
            </button>
          ) : (
            <button
              className="propertyButton"
              onClick={() => handleAddFavProperty(property.name)}
            >
              ♡
            </button>
          )}
        </div>
        <h3 style={{ margin: "0px" }}>{property.name}</h3>
      </div>
    </div>
  );
};

export default PropertyCompo;
