import React from "react"

//components
import Navbar from "../components/Navbar";
import { Box } from "@material-ui/core";
import Intersect from "../image/Intersect.svg";
import AddShopPageCard from "../components/AddShopsPageCard"

//mobile check
import { isMobile } from "react-device-detect";

export default function AddShops(){
  if (isMobile) {
    return (
      <>
        <Navbar />
        <div style={{ position: "relative", height: "20%" }}>
          <img
            style={{
              position: "absolute",
              zIndex: -1,
              top: "-80px",
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
