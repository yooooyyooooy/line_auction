import React from "react";

//components
import Navbar from "../components/Navbar";
import { Box } from "@material-ui/core";
import Intersect from "../image/Intersect.svg";

//mobile check
import { isMobile,isTablet } from "react-device-detect";
import ItemPageCard from "../components/ItemPageCard";

export default function Items(props) {
  const shift = isTablet ? "-5vh" : "-80px"
  if (isMobile) {
    return (
      <>
        <Navbar />
        <div style={{ position: "relative", height: "100%" }}>
          <img
            style={{
              position: "absolute",
              zIndex: -1,
              top: shift,
              maxWidth: "100%",
            }}
            src={Intersect}
            alt="Intersect"
          />
        </div>
        <Box>
          <ItemPageCard id = {props.match.params.id}/>
        </Box>
      </>
    );
  }
  return (
    <>
      <Navbar />
      Hello World
    </>
  );
}
