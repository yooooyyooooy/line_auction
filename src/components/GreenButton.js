import React from "react";
import { Button, Box } from "@material-ui/core";
import colors from "../styles/colors";
import { isTablet } from "react-device-detect";
import { useSelector } from "react-redux";
import axios from "axios";

const headerFontSize = {
  xs: "1.3rem",
  sm: "1.5rem",
  md: "1.7rem",
  xl: "2.3rem",
};

export default function GreenButton(props) {
  const informationUserReducer = useSelector(
    ({ informationReducer }) => informationReducer
  );
  const myFont = isTablet ? headerFontSize.md : "1rem";
  async function send() {
    const res = await axios.put(
      `https://asia-east2-line-auction-backend.cloudfunctions.net/item/${props.id}`,
      {
        userId: informationUserReducer.userId,
        username: informationUserReducer.userName,
        // userId:"U4926644b51833230d9fe6299bb8ede28",
        // username:"PLEUM"
      }
    );
    console.log(res);
  }
  function pay() {
    // liff.closeWindow()
  }
  return (
    <Button
      onClick={props.type === "RUNNING" ? send : pay}
      style={{
        backgroundColor: colors.green,
        width: "100%",
        color: "white",
        height: "200%",
        fontWeight: "bold"
      }}
      endIcon={props.icon}
    >
      <Box fontSize={myFont}>{props.text}</Box>
    </Button>
  );
}
