import React from "react";

function DisplayMultiplePlaces({ userInput, routes }) {
  const inputCodes = userInput.split(",").map((code) => code.trim());

  const commonPlaces = {};

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // Function to determine the color for a specific place
  const getColor = (place) => {
    if (
      inputCodes.every((code) =>
        routes.find((route) => route.code === code && place in route.places)
      )
    ) {
      return commonPlaces[place] || getRandomColor();
    } else {
      return "black"; 
    }
  };

  // Function to display places with proper coloring
  const displayPlaces = () => {
    // Iterate through input codes to find common places and assign colors
    inputCodes.forEach((code) => {
      const route = routes.find((route) => route.code === code);
      if (route) {
        Object.keys(route.places).forEach((place) => {
            // If common
          if (!commonPlaces[place]) {
            commonPlaces[place] = getRandomColor();
          }
        });
      }
    });

    return (
      <div>
        {inputCodes.map((code) => {
          const route = routes.find((route) => route.code === code);
          if (route) {
            const places = Object.keys(route.places);
            return (
              <div key={code}>
                <h3>Route Code: {code}</h3>
                <p>
                  {places.map((place, index) => (
                    <span key={place}>
                      {index > 0 && (
                        <span style={{ color: "black" }}> {" <-> "} </span>
                      )}{" "}
                      <span style={{ color: getColor(place) }}>{place}</span>
                    </span>
                  ))}
                </p>
              </div>
            );
          } else {
            return <p key={code}>Route {code} not found</p>;
          }
        })}
      </div>
    );
  };

  return <div>{displayPlaces()}</div>;
}

export default DisplayMultiplePlaces;
