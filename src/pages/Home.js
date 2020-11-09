import React, { useEffect, useState } from "react";

import colors from "../styles/colors";
import FavoritesCard from "../components/FavoritesCard";
import OngoingCard from "../components/OngoingCard";
import ShopsCard from "../components/ShopsCard";
import HistoryCard from "../components/HistoryCard";
import Navbar from "../components/Navbar";
import { Box, Typography } from "@material-ui/core";
import Intersect from "../image/Intersect.svg";
import LandingDesktop from "../components/LandingDesktop";
//redux
import { useSelector } from "react-redux";
import store from "../reduxStore";
import * as informationUserAction from "../actions/InformationUser.action";

//firebase
import { firestore } from "../utils/setFirebase";

import { isMobile, isTablet } from "react-device-detect";

/* initialize fontSize for responsive mode */
const headerFontSize = {
  xs: "1.3rem",
  sm: "1.5rem",
  md: "1.7rem",
};

// will do "makeStyles"

export default function Home() {
  const [allShop, setAllShop] = useState([]);
  const [allOnbidding, setAllOnbidding] = useState([]);
  const [allHistory, setAllHistory] = useState([]);
  const [allFav, setAllFav] = useState([]);
  const informationUserReducer = useSelector(
    ({ informationReducer }) => informationReducer
  );
  useEffect(() => {
    let unmounted = false;
    if (informationUserReducer.userId) {
      firestore
        .collection("users")
        .doc(informationUserReducer.userId)
        .onSnapshot(function (doc) {
          if (!unmounted) {
            setAllShop(doc.data().favoriteStore);
            setAllFav(doc.data().favoriteItem);
            setAllOnbidding(doc.data().onBidding);
            setAllHistory(doc.data().history);
            store.dispatch(
              informationUserAction.setCredit({
                credit: doc.data().credits,
              })
            );
          }
        });
    }
    return () => {
      unmounted = true;
    };
  }, [informationUserReducer.userId]);

  const shift = isTablet ? "-20vh" : "-80px";

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
              width: "100%",
            }}
            src={Intersect}
            alt="Intersect"
          />
        </div>
        <Box style={{ marginTop: "5%", marginLeft: "7%" }}>
          <Typography
            style={{ fontSize: headerFontSize.xs, color: colors.white }}
          >
            WELCOME BACK!
          </Typography>
        </Box>
        <Box style={{ marginTop: "2%", marginLeft: "15%" }}>
          <Typography
            style={{
              fontSize: headerFontSize.md,
              color: colors.white,
              fontWeight: "bold",
            }}
          >
            {informationUserReducer.userName}
            <br />
          </Typography>
        </Box>
        <Box marginY="2%" marginX="auto">
          <OngoingCard data={allOnbidding} />
          <ShopsCard data={allShop} />
          <FavoritesCard data={allFav} />
          <HistoryCard data={allHistory} />
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
