import React from "react";

//components
import { Box, IconButton } from "@material-ui/core";
import RoundPaper from "./RoundPaper";
// import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from "@material-ui/icons/StarBorder";
import BackButton from "../components/BackButton";

import { makeStyles } from "@material-ui/core/styles";
import colors from "../styles/colors";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  headers: {
    color: colors.grey,
    display: "flex",
    justifyContent: "right",
    fontSize: headerFontSize,
  },
}));

/* initialize fontSize for responsive mode */
const headerFontSize = {
  xs: "1.3rem",
  sm: "1.5rem",
  md: "1.7rem",
};

function ItemPageCard() {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Box marginTop="5%">
      <RoundPaper style={{ width: "80%", margin: "auto" }}>
        <Box display="flex" className={classes.headers}>
          <Box marginTop="-2%">
            <span
              onClick={(e) => {
                history.goBack();
              }}
            >
              <BackButton />
            </span>
          </Box>
          <Box marginLeft="auto" marginTop = "-5%">
            <IconButton>
              <StarBorderIcon fontSize="large" />
            </IconButton>
          </Box>
        </Box>
      </RoundPaper>
    </Box>
  );
}

export default ItemPageCard;
