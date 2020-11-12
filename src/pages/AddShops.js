import React from "react"

//components
import Navbar from "../components/Navbar";
import { Box } from "@material-ui/core";
import Intersect from "../image/Intersect.svg";
import AddShopPageCard from "../components/AddShopsPageCard"

//mobile check
import { isMobile,isTablet } from "react-device-detect";

export default function AddShops(){
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
           <AddShopPageCard/> 
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
