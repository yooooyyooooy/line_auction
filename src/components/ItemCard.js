import React, { useState, useEffect } from "react";

import colors from "../styles/colors";
import { Box, Button } from "@material-ui/core";
import Diamonds from "../image/diamonds.svg";
import TimelapseIcon from "@material-ui/icons/Timelapse";
import TimerIcon from "@material-ui/icons/Timer";
import CheckIcon from "@material-ui/icons/Check";
import { useHistory } from "react-router-dom";
import { isTablet } from "react-device-detect";
import { firestore } from "../utils/setFirebase";

const imgStyle = {
  maxWidth: "100%",
  width: "100%",
  height: "100%",
  objectFit: "cover",
  top: "0",
  bottom: "0",
  margin: "auto",
};

const headerFontSize = {
  xs: "1.3rem",
  sm: "1.5rem",
  md: "1.7rem",
  xl: "2.3rem",
};

export default function ItemCard(props) {
  const history = useHistory();
  const [active, setActive] = useState(false);
  const [time, setTime] = useState(0);
  const myFont = isTablet ? headerFontSize.xl : headerFontSize.xs;
  useEffect(() => {
    let unmounted = false;
    function fetch() {
      if (props.id && props.id !== undefined) {
        firestore
          .collection("items")
          .doc(props.id)
          .onSnapshot((snapshot) => {
            if (!unmounted) {
              const snapData = snapshot.data();
              // setDataHistory(snapData.history);
              const end = new Date(snapData.endAt.seconds * 1000);
              const now = new Date();
              const start = new Date(snapData.startAt.seconds * 1000);
              if (start <= now && now < end) {
                setActive(true);
                setTime(Math.floor((end - now) / 60000));
              } else if (start > now) {
                setActive(false);
                setTime(Math.floor((start - now) / 60000));
              } else {
                setActive(false);
                setTime(-1);
              }
            }
          });
      }
    }
    fetch();
    return () => {
      unmounted = true;
    };
  }, [props.id]);
  return (
    <Button
      onClick={() => {
        history.push(`items/${props.id}`);
      }}
      variant="contained"
      style={{
        backgroundColor: active ? colors.yellow : colors.grey,
        marginBottom: "3%",
        width: "100%",
        boxShadow: "1px 1px 2px 1px rgba(0, 0, 0, 0.1)",
      }}
      fullWidth
    >
      <Box display="flex" justifyContent="space-between">
        <Box width="30%" justifyContent="center">
          <img alt="1" src={Diamonds} style={imgStyle} />
        </Box>
        <Box
          width="65%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box>
            <Box
              style={{
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                width: "45vw",
                fontSize: myFont,
                color: "#2A282A",
              }}
            >
              {props.title}
            </Box>
            <Box
              style={{ color: "#808080", justifyContent: "space-between" }}
              paddingX="2%"
            >
              {active ? (
                <Box display="flex" alignItems="center" justifyContent="center">
                  <TimelapseIcon fontSize="inherit" />
                  <Box marginLeft="3%" fontSize="0.875rem">
                    เหลือเวลาอีก {time} นาที
                  </Box>
                </Box>
              ) : time < 0 ? (
                <Box display="flex" alignItems="center" justifyContent="center">
                  <CheckIcon fontSize="inherit" />
                  <Box marginLeft="3%" fontSize="0.875rem">
                    การประมูลจบแล้ว
                  </Box>
                </Box>
              ) : (
                <Box display="flex" alignItems="center" justifyContent="center">
                  <TimerIcon fontSize="inherit" />
                  <Box marginLeft="3%" fontSize="0.875rem">
                    การประมูลจะเริ่มในอีก {time} นาที
                  </Box>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Button>
  );
}
