import React from "react";

import colors from "../styles/colors";
import FavoritesCard from "../components/FavoritesCard";
import OngoingCard from "../components/OngoingCard";
import ShopsCard from "../components/ShopsCard";
import HistoryCard from "../components/HistoryCard";
import Navbar from "../components/Navbar";
import { Box, Typography } from "@material-ui/core";
import Intersect from "../image/Intersect.svg";
import LandingDesktop from "../components/LandingDesktop"
//redux
import { useSelector } from "react-redux";

import { isMobile } from "react-device-detect";

/* initialize fontSize for responsive mode */
const headerFontSize = {
  xs: "1.3rem",
  sm: "1.5rem",
  md: "1.7rem",
};

// will do "makeStyles"
 

export default function Home() {
  const informationUserReducer = useSelector(
    ({ informationReducer }) => informationReducer
  );
  if (isMobile) {
    return (
      <>
        <Navbar />
        <div style={{ position: "relative", height: "100%" }}>
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
        <Box style={{ marginTop: "5%", marginLeft: "7%" }}>
          <Typography
            style={{ fontSize: headerFontSize.xs, color: colors.white }}
          >
            WELCOME BACK !
          </Typography>
        </Box>
        <Box style={{ marginTop: "2%", marginLeft: "15%" }}>
          <Typography
            style={{ fontSize: headerFontSize.md, color: colors.white }}
          >
            {informationUserReducer.userName} Hello World
            <br />
            {informationUserReducer.userID}
            <br />
            {informationUserReducer.userEmail}
          </Typography>
        </Box>
        <Box marginY = "2%" marginX = "auto" >
          <OngoingCard />
          <FavoritesCard />
          <ShopsCard />
          <HistoryCard />
        </Box>
      </>
    );
  }
  return (
    <>
      <Navbar />
      <LandingDesktop />
    </>
  );
}
