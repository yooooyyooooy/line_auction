import React from "react"
import backGroundDesktop from "../image/backgroundDesktop.svg";
import {Box} from "@material-ui/core"

export default function Background() {
    return (
        <Box width="100%" style={{backgroundColor:"red"}}>
        <img
          style={{
            position: "absolute",
            zIndex: -1,
            top: "0",
            width:"100%"
          }}
          src={backGroundDesktop}
          alt="backGroundDesktop"
        />
        </Box>
    )
}