import React from "react";

//Components
import { Box, List, ListItem,Typography } from "@material-ui/core";
import RoundPaper from "./RoundPaper";
import StarIcon from "@material-ui/icons/Star";
import BackButton from "../components/BackButton";

import { makeStyles } from "@material-ui/core/styles";
import colors from "../styles/colors";
import {useHistory} from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  headers: {
    color: colors.blue,
    display: "flex",
    justifyContent: "right",
    fontSize: headerFontSize
  },
}));


/* initialize fontSize for responsive mode */
const headerFontSize = {
  xs: "1.3rem",
  sm: "1.5rem",
  md: "1.7rem",
};

function FavoritePageCard() {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Box>
      <RoundPaper style={{ width: "80%", marginTop: "10%", margin: "auto" }}>
        <Box display = "flex">
        <span onClick={e=>{history.push("/")}}><BackButton/></span>
          <Box className={classes.headers} marginLeft = "auto">
            <StarIcon fontSize="small" />
            <Typography>FAVORITES</Typography>
          </Box>
        </Box>
        <List>
          <ListItem>ayyyyy</ListItem>
          <ListItem>ayyyyy</ListItem>
          <ListItem>ayyyyy</ListItem>
          <ListItem>ayyyyy</ListItem>
        </List>

      </RoundPaper>
    </Box>
  );
}

export default FavoritePageCard;