import React from "react";

//Components
import { Box, List, ListItem, Typography } from "@material-ui/core";
import RoundPaper from "./RoundPaper";
import GreenButton from "./GreenButton";
import ReplayIcon from "@material-ui/icons/Replay";

import { makeStyles } from "@material-ui/core/styles";
import colors from "../styles/colors";
const useStyles = makeStyles((theme) => ({
  headers: {
    color: colors.blue,
    display: "flex",
    justifyContent: "flex-end",
  },
}));

function HistoryCard() {
  const classes = useStyles();
  return (
    <Box marginTop="5%">
      <RoundPaper style={{ width: "80%", margin: "auto" }}>
        <Box className={classes.headers}>
          <Box marginRight="1rem">
            <ReplayIcon fontSize="small" />
          </Box>
          <Box>
            <Typography>HISTORY</Typography>
          </Box>
        </Box>
        <List>
          <ListItem />
          <ListItem />
        </List>
        <GreenButton text="SHOW ALL HISTORY" dest="/history" />
      </RoundPaper>
    </Box>
  );
}

export default HistoryCard;
