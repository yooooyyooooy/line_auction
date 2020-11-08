import React, { useState } from "react";

//components
import { Box, IconButton, Typography, TextField } from "@material-ui/core";
import RoundPaper from "./RoundPaper";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import BackButton from "../components/BackButton";
import GreenButton from "../components/GreenButton";
import Diamonds from "../image/diamonds.svg";

import { makeStyles } from "@material-ui/core/styles";
import colors from "../styles/colors";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  headers: {
    color: colors.grey,
    display: "flex",
    justifyContent: "right",
    marginTop: "1%"
  },
  pictures: {
    maxWidth: "100%",
    
  },
  heading1: {
    fontWeight: "bold",
    fontSize: headingFontSize,
  },
  details: {
    color: colors.darkGrey,
    fontSize: detailFontSize,
  },
}));

/* initialize fontSize for responsive mode */
const headingFontSize = {
  xs: "1.3rem",
  sm: "1.5rem",
  md: "1.7rem",
};
const detailFontSize = {
  xs: "1.0rem",
  sm: "1.2rem",
  md: "1.4rem",
};

function ItemPageCard(props) {
  const classes = useStyles();
  const history = useHistory();
  const [intime] = useState(true);
  const [clicks, setClick] = useState(false);
  const handleClick = (e) => {
    clicks ? setClick(false) : setClick(true);
  };
  return (
    <Box marginTop="5%">
      <RoundPaper style={{ width: "80%", margin: "auto" }}>
        <Box display="flex" className={classes.headers}>
          <Box >
            <span
              onClick={(e) => {
                history.goBack();
              }}
            >
              <BackButton />
            </span>
          </Box>
          <Box marginLeft="auto" marginTop = "-1%">
            <span onClick={handleClick}>
              <IconButton>
                {clicks ? (
                  <StarIcon style={{ color: colors.gold }} />
                ) : (
                  <StarBorderIcon />
                )}
              </IconButton>
            </span>
          </Box>
        </Box>
        <Box marginTop="4%" align  = "center" >
          <img src={Diamonds} alt={1} className={classes.pictures} />
        </Box>
        <Box marginTop="4%">
          <Box>
            <Typography className={classes.heading1} variant="h6">
              ids : {props.id}
            </Typography>
          </Box>
          <Box>
            <Typography className={classes.details} variant="body2">
              Test: Diamond is the only gem made of a single element: It is
              typically about 99.95 percent carbon. The other 0.05 percent can
              include one or more trace elements, which are atoms that aren’t
              part of the diamond’s essential chemistry.
            </Typography>
          </Box>
        </Box>
        <Box align="center" marginTop="10%">
          {intime ? (
            <Typography variant="subtitle1">ราคาประมูลปัจจุบัน</Typography>
          ) : (
            <Typography variant="subtitle1">สิ้นสุดการประมูลที่</Typography>
          )}

          <Typography variant="h3" style={{ fontWeight: "bold" }}>
            100,000 บาท
          </Typography>
        </Box>
        <Box marginTop="10%">
          {intime ? (
            <TextField
              id="filled-required"
              placeholder="เสนอราคาประมูล"
              variant="outlined"
              size="small"
              fullWidth
            />
          ) : null}
        </Box>
        <Box marginTop="4%">
          {intime ? (
            <GreenButton text="เสนอราคา" icon={<NavigateNextIcon />} />
          ) : (
            <GreenButton
              text="โอนเงินผ่าน LINE PAY"
              icon={<NavigateNextIcon />}
            />
          )}
        </Box>
      </RoundPaper>
    </Box>
  );
}

export default ItemPageCard;
