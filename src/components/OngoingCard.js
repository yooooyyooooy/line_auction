import React from "react";

//Components
import { Box, List, Typography } from "@material-ui/core";
import RoundPaper from "./RoundPaper";
import GreenButton from "./GreenButton";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

import { makeStyles } from "@material-ui/core/styles";
import colors from "../styles/colors";
import ItemCard from "./ItemCard"

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
    <Box marginTop="0%">
      <RoundPaper style={{ width: "80%", margin: "auto" }}>
        <Box className={classes.headers}>
          <Box marginRight="1rem">
            <FiberManualRecordIcon fontSize="small" />
          </Box>
          <Box>
            <Typography>ON-GOING</Typography>
          </Box>
        </Box>
        <List>
          <ItemCard title="เพชรวิบวับนำเข้าจากอังกฤษ" time="เหลือเวลาอีก 20 นาที"/>
          <ItemCard title="วิบวับวิบวับ" time="เหลือเวลาอีก 20 นาที"/>
        </List>
        <GreenButton text="SHOW ALL ON-GOING" dest="/ongoing"/>
      </RoundPaper>
    </Box>
  );
}

export default OngoingCard;
