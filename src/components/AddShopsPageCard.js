import React from "react";

//Components
import { Box, Typography, TextField } from "@material-ui/core";
import RoundPaper from "./RoundPaper";
import AddIcon from "@material-ui/icons/Add";
import BackButton from "../components/BackButton";
import GreenButton from "../components/GreenButton";
import CheckIcon from "@material-ui/icons/Check";

import { makeStyles } from "@material-ui/core/styles";
import colors from "../styles/colors";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  headers: {
    color: colors.blue,
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

function AddShopPageCard() {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Box marginTop="5%">
      <RoundPaper style={{ width: "80%", margin: "auto" }}>
        <Box display="flex">
          <Box marginTop="-2%">
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
              <AddIcon fontSize="small" />
            </Box>
            <Box>
              <Typography style={{ fontWeight: "bold" }}>ADD SHOP</Typography>
            </Box>
          </Box>
        </Box>
        <Box align="center" marginY="4%">
          <TextField
            id="filled-required"
            placeholder="SHOP CODE"
            variant="outlined"
            fullWidth
          />
        </Box>
        <Box marginY="4%">
          <GreenButton text="CONFIRM CODE" icon={<CheckIcon />} />
        </Box>
      </RoundPaper>
    </Box>
  );
}

export default AddShopPageCard;
