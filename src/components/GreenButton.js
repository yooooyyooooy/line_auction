import React from "react";
import { Button, Box } from "@material-ui/core";
import colors from "../styles/colors";
import { isTablet } from "react-device-detect";

const headerFontSize = {
  xs: "1.3rem",
  sm: "1.5rem",
  md: "1.7rem",
  xl: "2.3rem",
};

export default function GreenButton(props) {
  const myFont = isTablet ? headerFontSize.md : "1rem";

  return (
    <Button
      onClick={props.handle}
      style={{
        backgroundColor: !props.disable  ? colors.green : colors.grey,
        width: "100%",
        color: "white",
        height: "200%",
        fontWeight: "bold",
      }
      }
      disabled={props.disable ? props.disable : false}
      endIcon={props.icon}
    >
      <Box fontSize={myFont}>{props.text}</Box>
    </Button>
  );
}
