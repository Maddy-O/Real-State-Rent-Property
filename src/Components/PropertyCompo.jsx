import React from "react";

const PropertyCompo = ({ property }) => {
  console.log(property);
  return (
    <div style={{ width: "250px", textAlign: "left" }}>
      <div
        style={{
          backgroundColor: `${property.img}`,
          width: "250px",
          height: "150px",
        }}
      ></div>
      <div style={{ padding: "0px 7px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p style={{ marginBottom: "5px" }}>
            <b style={{ fontSize: "20px", color: "#7165eb" }}>
              {property.price}
            </b>
            /month
          </p>
          <button
            style={{
              width: "35px",
              height: "35px",
              border: "1px solid gray",
              borderRadius: "50%",
            }}
          >
            ♡
          </button>
        </div>
        <h3 style={{ margin: "0px" }}>{property.name}</h3>
      </div>
    </div>
  );
};

export default PropertyCompo;
