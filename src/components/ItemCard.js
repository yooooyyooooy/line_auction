import React,{useState} from "react"

import RoundPaper from "./RoundPaper"
import colors from "../styles/colors"
import {Box,Typography,Button} from "@material-ui/core"

const imgStyle = {
    maxWidth:"100%",
    display:"absolute",
    top:"50%",
    translateY:"-50%"
}

const middle = {
    position:"relative" ,
    top:"50%",
    translateY:"-50%"
}

export default function ItemCard(props) {
    const [isHover,setHover] = useState(false) 
    return (
        <Button variant="contained" style={{backgroundColor:colors.yellow}}>
            <Box display="flex" justifyContent="space-between" paddingX="3%" paddingY="2%">
                <Box width="30%" display="flex" justifyContent="center" >
                    <img alt="1" src="https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg" style={imgStyle} />
                </Box>
                <Box width="60%" display="flex" alignItems="center" justifyContent="center">
                    <Box>
                        <Box>
                            <Typography fontFamily="Cordia">{props.title}</Typography>
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