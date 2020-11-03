import React from "react";

import Navbar from "../components/Navbar";
import { Box } from "@material-ui/core";
import Intersect from "../image/Intersect.svg";

import { isMobile } from "react-device-detect";

import ShopsPageCard from "../components/ShopsPageCard"

/* initialize fontSize for responsive mode */


export default function Shops() {
  if (isMobile) {
    return (
      <>
        <Navbar />
        <div style={{ position: "relative", height: "100%" }}>
          <img
            style={{
              position: "absolute",
              zIndex: -1,
              top: "-25vh",
              maxWidth: "100%",
            }}
            src={Intersect}
            alt="Intersect"
          />
        </div>
        <Box>
           <ShopsPageCard/> 
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