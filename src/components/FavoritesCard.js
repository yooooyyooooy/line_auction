import React, { useState, useEffect } from "react";

//Components
import { Box, List, Typography } from "@material-ui/core";
import RoundPaper from "./RoundPaper";
import NavButton from "./NavButton";
import StarIcon from "@material-ui/icons/Star";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import ItemCard from "./ItemCard";

import { makeStyles } from "@material-ui/core/styles";
import colors from "../styles/colors";
import { firestore } from "../utils/setFirebase";

const useStyles = makeStyles((theme) => ({
  headers: {
    color: colors.blue,
    display: "flex",
    justifyContent: "flex-end",
  },
}));

function FavoritesCard({ data }) {
  const classes = useStyles();
  const [allFav, setAllFav] = useState([]);
  useEffect(() => {
    setAllFav([]);
    if (data && data !== "") {
      let v = [];
      firestore
        .collection("items")
        .get()
        .then(function(snapshot){
          snapshot.forEach(function (doc) {
            if (data.includes(doc.id)) {
              let x = doc.data();
              x.ID = doc.id;
              v.push(x);
            }
          });
          setAllFav(v);
        });
    }
  }, [data]);

  return (
    <Box marginTop="5%">
      <RoundPaper style={{ width: "80%", margin: "auto" }}>
        <Box className={classes.headers}>
          <Box marginRight="1rem">
            <StarIcon fontSize="small" />
          </Box>
          <Box>
            <Typography style={{ fontWeight: "bold" }}>FAVORITES</Typography>
          </Box>
        </Box>
        <Box marginTop="3%">
          <List>
            {allFav &&
              allFav.map((e, index) => {
                return (
                  <ItemCard
                    key={index}
                    title={e.title}
                    id={e.ID}
                    time="เหลือเวลาอีก 20 นาที"
                    type="RUNNING"
                  />
                );
              })}
          </List>
        </Box>
        <NavButton
          text="SHOW ALL FAVOURITES"
          dest="/favorites"
          icon={<NavigateNextIcon />}
        />
      </RoundPaper>
    </Box>
  );
}

export default FavoritesCard;
