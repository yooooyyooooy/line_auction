import React from "react"

import colors from "../styles/colors"
import {Box,Button} from "@material-ui/core"
import Diamonds from "../image/diamonds.png";
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';

const imgStyle = {
    maxWidth:"100%",
    display:"absolute",
    top:"50%",
    translateY:"-50%",
    objectFit:"cover"
}

const headerFontSize = {
    xs: "1.3rem",
    sm: "1.5rem",
    md: "1.7rem",
  };


export default function ItemCard(props) {
    return (
        <Button variant="contained" style={{backgroundColor:colors.yellow,marginBottom:"3%"}} >
            <Box display="flex" justifyContent="space-between"paddingY="2%">
                <Box width="30%" display="flex" justifyContent="center">
                    <img alt="1" src={Diamonds} style={imgStyle}/>
                </Box>
                <Box width="70%" display="flex" alignItems="center" justifyContent="center" >
                    <Box>
                        <Box style={{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",width:"45vw",fontSize:headerFontSize.xs,color:'#2A282A'}}>
                            {props.title}
                        </Box>
                        <Box style={{color:"#808080",justifyContent:"space-between"}} display="flex" paddingX="2%" >
                            <Box>
                                <AccessAlarmIcon/>
                            </Box>
                            <Box>
                                {props.time}
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Button>
    )
}