import React from "react";

//Components
import { Box, List, Typography } from "@material-ui/core";
import RoundPaper from "./RoundPaper";
import GreenButton from "./GreenButton";
import ReplayIcon from "@material-ui/icons/Replay";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { makeStyles } from "@material-ui/core/styles";
import colors from "../styles/colors";
import ItemCard from "./ItemCard"
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
            <Typography style ={{fontWeight : "bold"}}>HISTORY</Typography>
          </Box>
        </Box>
        <Box  marginTop="3%">
          <List>
            <ItemCard
              title="เพชรวิบวับนำเข้าจากอังกฤษ"
              time="เหลือเวลาอีก 20 นาที"
            />
            <ItemCard 
              title="วิบวับวิบวับ"
              time="เหลือเวลาอีก 20 นาที" />
          </List>
        </Box>
        <GreenButton text="SHOW ALL HISTORY" dest="/history" icon = {<NavigateNextIcon/>}/>
      </RoundPaper>
    </Box>
  );
}

export default HistoryCard;
