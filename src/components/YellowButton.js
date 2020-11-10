import React from "react";
import { Button } from "@material-ui/core";

export default function YelloWButton(props) {
  return (
    <Button
      variant="contained"
      style={{
        backgroundColor: props.disable === false ? "#FFD439" : "",
        fontWeight: "bold",
      }}
      endIcon={props.icon}
      fullWidth
      disabled={props.disable}
    >
      {props.text}
    </Button>
  );
}
