import React from "react";

//Components
import { Box, List, ListItem,Typography } from "@material-ui/core";
import RoundPaper from "./RoundPaper";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import BackButton from "../components/BackButton";

import { makeStyles } from "@material-ui/core/styles";
import colors from "../styles/colors";

const useStyles = makeStyles((theme) => ({
  headers: {
    color: colors.red,
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

function OngoingPageCard() {
  const classes = useStyles();
  return (
    <Box>
      <RoundPaper style={{ width: "80%", marginTop: "10%", margin: "auto" }}>
        <Box display = "flex">
          <BackButton/>
          <Box className={classes.headers} marginLeft = "auto">
            <FiberManualRecordIcon fontSize="small" />
            <Typography>ON-GOING</Typography>
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

export default OngoingPageCard;
