import React from "react";

//Components
import { Box, List, Typography } from "@material-ui/core";
import RoundPaper from "./RoundPaper";
import GreenButton from "./GreenButton";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

import { makeStyles } from "@material-ui/core/styles";
import colors from "../styles/colors";

const useStyles = makeStyles((theme) => ({
  headers: {
    color: colors.red,
    display: "flex",
    justifyContent: "flex-end",
  },
}));

function OngoingCard() {
  const classes = useStyles();
  return (
    <Box>
      <RoundPaper style={{ width: "80%", marginTop: "5%", margin: "auto" }}>
        <Box className={classes.headers}>
          <FiberManualRecordIcon fontSize="small" />
          <Typography>ON-GOING</Typography>
        </Box>
        <List></List>
        <GreenButton text="SHOW ALL ON-GOING" />
      </RoundPaper>
    </Box>
  );
}

export default OngoingCard;
