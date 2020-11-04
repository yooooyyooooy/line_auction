import React from "react";

//Components
import { Box, List, ListItem, Typography } from "@material-ui/core";
import RoundPaper from "./RoundPaper";
import GreenButton from "./GreenButton";
import StarIcon from "@material-ui/icons/Star";
import ItemCard from "./ItemCard";

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
          <Box marginRight="1rem">
            <StarIcon fontSize="small" />
          </Box>
          <Box>
            <Typography>FAVORITES</Typography>
          </Box>
        </Box>
        <List >
          <ListItem>
            <ItemCard />
          </ListItem>
          <ListItem>
            <ItemCard />
          </ListItem>
        </List>
        <GreenButton text="SHOW ALL FAVOURITES" dest="/favorites" />
      </RoundPaper>
    </Box>
  );
}

export default FavoritesCard;
