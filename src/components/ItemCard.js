import React from "react"

import colors from "../styles/colors"
import {Box,Typography,Button} from "@material-ui/core"

const imgStyle = {
    maxWidth:"100%",
    display:"absolute",
    top:"50%",
    translateY:"-50%"
}

const headerFontSize = {
    xs: "1.3rem",
    sm: "1.5rem",
    md: "1.7rem",
  };


export default function ItemCard(props) {
    return (
        <Button variant="contained" style={{backgroundColor:colors.yellow,marginBottom:"3%"}} >
            <Box display="flex" justifyContent="space-between" paddingX="3%" paddingY="2%">
                <Box width="30%" display="flex" justifyContent="center" style={{backgroundColor:"red"}}>
                    <img alt="1" src="https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg" style={imgStyle} />
                </Box>
                <Box width="70%" display="flex" alignItems="center" justifyContent="center" style={{backgroundColor:"green"}}>
                    <Box>
                        <Box>
                            <Typography fontSize={headerFontSize.md}>{props.title}</Typography>
                        </Box>
                        <Box>
                            {props.time}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Button>
    )
}