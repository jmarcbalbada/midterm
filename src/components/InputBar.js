import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function InputBar({ onChange }) {
  return (
    <Box
      sx={{
        width: 500,
        maxWidth: "100%",
      }}
    >
      <TextField
        fullWidth
        label="Enter Route Code"
        id="routeCode"
        onChange={onChange} 
      />
    </Box>
  );
}

export default InputBar;
