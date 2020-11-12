import React from "react";

//Components
import { Box, List, ListItem, Typography } from "@material-ui/core";
import RoundPaper from "./RoundPaper";
import ShopTwoIcon from "@material-ui/icons/ShopTwo";
import BackButton from "../components/BackButton";
import AddIcon from "@material-ui/icons/Add";
import NavButton from "./NavButton";
import { makeStyles } from "@material-ui/core/styles";
import colors from "../styles/colors";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  headers: {
    color: colors.blue,
    display: "flex",
    justifyContent: "right",
    fontSize: headerFontSize,
    marginTop: "1%"
  },
}));

/* initialize fontSize for responsive mode */
const headerFontSize = {
  xs: "1.3rem",
  sm: "1.5rem",
  md: "1.7rem",
};

// will add "GreenButton" later

function ShopsPageCard() {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Box marginTop="5%">
      <RoundPaper style={{ width: "80%", margin: "auto" }}>
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
              <ShopTwoIcon fontSize="small" />
            </Box>
            <Box>
              <Typography style={{ fontWeight: "bold" }}>SHOPS</Typography>
            </Box>
          </Box>
        </Box>
        <Box marginY="4%">
          <NavButton
            text="ADD MORE SHOP"
            icon={<AddIcon />}
            dest="/addshops"
          />
        </Box>
        <Box margin="4%">
          <List>
            <ListItem>ayyyyy</ListItem>
            <ListItem>ayyyyy</ListItem>
            <ListItem>ayyyyy</ListItem>
            <ListItem>ayyyyy</ListItem>
          </List>
        </Box>
      </RoundPaper>
    </Box>
  );
}

export default ShopsPageCard;
