import React, { useState, useEffect } from "react";
import InputBar from "./components/InputBar";
import Box from "@mui/material/Box";
import DisplayMultiplePlaces from "./components/DisplayMultiplePlaces";
import { routes } from "./routes.js";

function App() {
  const [userInput, setUserInput] = useState("");

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Jeepney Route</h1>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: "100vh",
          marginRight: "300px",
          marginLeft: "300px",
        }}
      >
        <Box style={{ marginBottom: "20px" }}>
          {" "}
          <InputBar onChange={handleInputChange} />
        </Box>
        <DisplayMultiplePlaces userInput={userInput} routes={routes} />
      </Box>
    </div>
  );
}

export default App;
