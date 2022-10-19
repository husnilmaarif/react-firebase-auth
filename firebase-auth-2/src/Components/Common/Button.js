import React from "react";
import Button from "@mui/material/Button";

function ButtonComponent({ title, handleAction }) {
  return (
    <Button variant="contained" onClick={handleAction}>
      {title}
    </Button>
  );
}

export default ButtonComponent;
