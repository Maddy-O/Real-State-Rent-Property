import React, { useEffect, useState } from "react";
import PropertyCompo from "../Components/PropertyCompo";

const FavouritesPage = () => {
  const [fav, setFav] = useState(
    JSON.parse(localStorage.getItem("favProperty")) || []
  );

  useEffect(() => {
    setFav(JSON.parse(localStorage.getItem("favProperty")));
  }, []);

  return (
    <div>
      <div style={{ minHeight: "1vh" }}>
        {fav.map((e, index) => (
          <PropertyCompo key={index} property={e} remove={"remove"} />
        ))}
      </div>
    </div>
  );
};

export default FavouritesPage;
