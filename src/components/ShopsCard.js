import React from "react";

//Components
import { Box, List, Typography } from "@material-ui/core";
import RoundPaper from "./RoundPaper";
import GreenButton from "./GreenButton";
import ShopTwoIcon from "@material-ui/icons/ShopTwo";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { makeStyles } from "@material-ui/core/styles";
import colors from "../styles/colors";

const useStyles = makeStyles((theme) => ({
  headers: {
    color: colors.blue,
    display: "flex",
    justifyContent: "flex-end",
  },
}));

function ShopsCard() {
  const classes = useStyles();
  return (
    <Box marginTop="5%">
      <RoundPaper style={{ width: "80%", margin: "auto" }}>
        <Box className={classes.headers}>
          <Box marginRight="1rem">
            <ShopTwoIcon fontSize="small" />
          </Box>
          <Box>
            <Typography style ={{fontWeight : "bold"}}>SHOPS</Typography>
          </Box>
        </Box>
        <List></List>
        <GreenButton text="SHOW ALL SHOPS" dest="/shops" icon = {<NavigateNextIcon/>} />
      </RoundPaper>
    </Box>
  );
}

export default ShopsCard;
