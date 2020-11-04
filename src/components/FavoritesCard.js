import React from "react";

//Components
import { Box, List, Typography } from "@material-ui/core";
import RoundPaper from "./RoundPaper";
import GreenButton from "./GreenButton";
import StarIcon from "@material-ui/icons/Star";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
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
            <StarIcon  fontSize = "small"/>
          </Box>
          <Box >
            <Typography style ={{fontWeight : "bold"}}>FAVORITES</Typography>
          </Box>
        </Box>
        <List>
        <ItemCard
            title="เพชรวิบวับนำเข้าจากอังกฤษ"
            time="เหลือเวลาอีก 20 นาที"
          />
        </List>
        <GreenButton
          text="SHOW ALL FAVOURITES"
          dest="/favorites"
          icon={<NavigateNextIcon />}
        />
      </RoundPaper>
    </Box>
  );
}

export default FavoritesCard;
