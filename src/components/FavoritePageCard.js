import React from "react";

//Components
import { Box, List, ListItem, Typography } from "@material-ui/core";
import RoundPaper from "./RoundPaper";
import StarIcon from "@material-ui/icons/Star";
import BackButton from "../components/BackButton";

import { makeStyles } from "@material-ui/core/styles";
import colors from "../styles/colors";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  headers: {
    color: colors.blue,
    display: "flex",
    justifyContent: "right",
    fontSize : headerFontSize,
    marginTop: "1%"
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
    <Box marginTop="5%">
      <RoundPaper style={{ width: "80%", marginTop: "10%", margin: "auto" }}>
        <Box display="flex">
          <Box >
            <span
              onClick={(e) => {
                history.goBack();
              }}
            >
              <BackButton />
            </span>
          </Box>
          <Box className={classes.headers} marginLeft="auto">
            <Box marginRight="1rem">
              <StarIcon fontSize="small" />
            </Box>
            <Box>
              <Typography style={{ fontWeight: "bold"}}>FAVORITES</Typography>
            </Box>
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
