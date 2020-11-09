import React, { useState, useEffect } from "react";

//components
import { Box, IconButton, Typography } from "@material-ui/core";
import RoundPaper from "./RoundPaper";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import BackButton from "../components/BackButton";
import GreenButton from "../components/GreenButton";
import YellowButton from "../components/YellowButton";
import Coins from "../image/coin.svg";
import TimelapseIcon from "@material-ui/icons/Timelapse";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import Diamonds from "../image/diamonds.svg";
import { useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import colors from "../styles/colors";
import { useHistory } from "react-router-dom";

import { firestore } from "../utils/setFirebase";

const useStyles = makeStyles((theme) => ({
  headers: {
    color: colors.grey,
    display: "flex",
    justifyContent: "right",
    marginTop: "1%",
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
  const informationUserReducer = useSelector(
    ({ informationReducer }) => informationReducer
  );
  const classes = useStyles();
  const history = useHistory();
  const [intime, setInTime] = useState();
  const [clicks, setClick] = useState(false);
  const handleClick = (e) => {
    clicks ? setClick(false) : setClick(true);
  };
  const [dataHistory, setDataHistory] = useState([]);
  const [mostValue, setMostValue] = useState("0");
  const [description, setDescription] = useState("");
  const [highestBidName, setHighestBidName] = useState("");
  const [highestBidId, setHighestBidId] = useState("");
  const [lower, setLower] = useState();
  const [timeDiff, setTimeDiff] = useState(0);

  useEffect(() => {
    function fetch() {
      if (props.id && props.id !== undefined) {
        firestore
          .collection("items")
          .doc(props.id)
          .onSnapshot((snapshot) => {
            const snapData = snapshot.data();
            setDataHistory(snapData.history.slice(-3).reverse());
            setMostValue(snapData.mostValue.value);
            setDescription(snapData.description);
            setHighestBidName(snapData.mostValue.username);
            setHighestBidId(snapData.mostValue.userId);
            setLower(snapData.lower);
            const end = new Date(snapData.endAt.seconds * 1000);
            const now = new Date();
            console.log(end);
            console.log(now);
            setInTime(now < end);
            setTimeDiff(Math.floor((end - now) / 60000));
          });
      }
    }
    fetch();
    console.log(props.id);
  }, [props.id]);

  return (
    <Box marginTop="5%">
      <RoundPaper style={{ width: "80%", margin: "auto" }}>
        <Box display="flex" className={classes.headers}>
          <Box>
            <span
              onClick={(e) => {
                history.goBack();
              }}
            >
              <BackButton />
            </span>
          </Box>
          <Box marginLeft="auto" marginTop="-1%">
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
        <Box marg>
          {intime ? (
            <Box
              style={{
                background: colors.yellow,
                color: colors.darkGrey,
                display: "flex",
              }}
            >
              <Box marginRight="3%">
                <TimelapseIcon />
              </Box>
              <Box marginTop="1%">
                <Typography variant="subtitle2">
                  เหลือเวลาประมูลอีก {timeDiff} นาที
                </Typography>
              </Box>
            </Box>
          ) : null}
        </Box>
        <Box marginTop="4%" align="center">
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
              {description}
            </Typography>
          </Box>
        </Box>
        <hr color={colors.lightGrey} />
        <Box align="center" marginTop="10%">
          {intime ? (
            <>
              <Typography variant="subtitle1">
                ปัจจุบันมีเหรียญ {mostValue / lower} เหรียญ
              </Typography>
              <Typography
                variant="subtitle2"
                style={{ color: colors.darkGrey }}
              >
                ผู้ชนะปัจจุบัน : {highestBidName}
              </Typography>
            </>
          ) : (
            <>
              <Typography variant="subtitle1">
                ปิดการประมูลที {mostValue / lower} เหรียญ
              </Typography>
              <Typography
                variant="subtitle2"
                style={{ color: colors.darkGrey }}
              >
                ผู้ชนะ : {highestBidName}
              </Typography>
            </>
          )}

          <Typography variant="h3" style={{ fontWeight: "bold" }}>
            {mostValue} บาท
          </Typography>
          <hr color={colors.lightGrey} />
        </Box>

        <Box marginY="6%" alignItems="center">
          {intime ? (
            <>
              <Box display="flex" justifyContent="space-between">
                <Box width="70%" height="50%">
                  <GreenButton
                    text="ลงเหรียญ"
                    icon={<NavigateNextIcon />}
                    id={props.id}
                    type={"RUNNING"}
                  />
                </Box>
                <Box display="flex">
                  <img src={Coins} alt ={Coins}/>
                  <Box marginTop="5%">
                    <Typography variant="h5">{lower}</Typography>
                  </Box>
                </Box>
              </Box>
            </>
          ) : (
            <Box>
              <YellowButton
                text="โอนเงินผ่าน LINE PAY"
                icon={<ArrowUpwardIcon />}
              />
            </Box>
          )}
        </Box>
      </RoundPaper>

      {/* end state  -> need to fetch some api*/}
      {!intime && informationUserReducer.userId === highestBidId ? (
        <Box marginY="8%">
          <RoundPaper style={{ width: "80%", margin: "auto" }}>
            <Box display="flex" justifyContent="flex-end">
              <Typography variant="h5">สถานะหลังประมูล</Typography>
            </Box>
            <hr color={colors.lightGrey} />
            <Box></Box>
          </RoundPaper>
        </Box>
      ) : null}

      <Box marginY="8%">
        <RoundPaper style={{ width: "80%", margin: "auto" }}>
          <Box display="flex" justifyContent="flex-end">
            <Typography variant="h5">ประวัติการประมูล</Typography>
          </Box>
          <hr color={colors.lightGrey} />
          <Box>
            {dataHistory.map((e, index) => {
              return (
                <Box marginTop="5px">
                  {index === 0 ? (
                    <Box
                      display="flex"
                      fontSize="1.2rem"
                      style={{ color: "#549378" }}
                    >
                      เหรียญที่ {mostValue / lower - index} : {e.username}
                    </Box>
                  ) : informationUserReducer.userId === e.userId ? (
                    <Box
                      display="flex"
                      fontSize="1.2rem"
                      style={{ color: "#394867" }}
                    >
                      เหรียญที่ {mostValue / lower - index} : {e.username}
                    </Box>
                  ) : (
                    <Box
                      display="flex"
                      fontSize="1.2rem"
                      style={{ color: "#BDBDBD" }}
                    >
                      เหรียญที่ {mostValue / lower - index} : {e.username}
                    </Box>
                  )}
                </Box>
              );
            })}
          </Box>
        </RoundPaper>
      </Box>
    </Box>
  );
}

export default ItemPageCard;
