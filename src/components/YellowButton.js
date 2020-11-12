import React from "react";
import { Button } from "@material-ui/core";

function YelloWButton(props) {
  const handle = () => {
    console.log(props.paymentUrl);
    if (props.paymentUrl && props.paymentUrl !== "") {
      window.location.assign(props.paymentUrl)
    }
  };
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
      onClick={handle}
    >
      {props.text}
    </Button>
  );
}
export default YelloWButton;