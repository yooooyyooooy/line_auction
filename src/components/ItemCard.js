import React from "react"

import RoundPaper from "./RoundPaper"
import colors from "../styles/colors"
import {Box,Typography} from "@material-ui/core"

export default function ItemCard(props) {
    return (
        <RoundPaper style={{backgroundColor:colors.yellow}}>
            <Box display="flex" justifyContent="space-between">
                <Box width="30%" stlye={{backgroudnColor:"red"}}>
                    <img alt="1" src="https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg" style={{maxWidth:"100%"}}/>
                </Box>
                <Box width="60%">
                    <Box>
                        <Typography fontFamily="Cordia">{props.title}</Typography>
                    </Box>
                    <Box>
                        {props.time}
                    </Box>
                </Box>
            </Box>
        </RoundPaper>
    )
}