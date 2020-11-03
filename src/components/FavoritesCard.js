import React from "react";

//Components
import { Box, List, Typography } from "@material-ui/core";
import RoundPaper from "./RoundPaper";
import GreenButton from "./GreenButton";
import StarIcon from "@material-ui/icons/Star";

import { makeStyles } from "@material-ui/core/styles";
import colors from "../styles/colors";

const useStyles = makeStyles((theme) => ({
  headers: {
    color: colors.blue,
    display: "flex",
    justifyContent: "flex-end",
  },
}));

function FavoritesCard() {
  const classes = useStyles();
  return (
    <Box marginTop="5%">
      <RoundPaper style={{ width: "80%", margin: "auto" }}>
        <Box className={classes.headers}>
          <StarIcon fontSize="small" />
          <Typography>FAVORITES</Typography>
        </Box>
        <List></List>
        <GreenButton text="SHOW ALL FAVOURITES" dest="/favorites"/>
      </RoundPaper>
    </Box>
  );
}

export default FavoritesCard;
