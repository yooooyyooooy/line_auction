import React from "react"

import colors from "../styles/colors"
import {Box,Button} from "@material-ui/core"
import Diamonds from "../image/diamonds.svg";
import {useHistory} from "react-router-dom"
import {isTablet} from "react-device-detect"

const imgStyle = {
    maxWidth:"100%",
    width:"100%",
    height:"100%",
    objectFit:"cover",
    top:"0",
    bottom:"0",
    margin:"auto"
}

const headerFontSize = {
    xs: "1.3rem",
    sm: "1.5rem",
    md: "1.7rem",
    xl: "2.3rem",
  };


export default function ItemCard(props) {
    const history = useHistory()
    const myFont = isTablet ? headerFontSize.xl : headerFontSize.xs
    //const myFont = headerFontSize.xs
    return (
        <Button onClick={()=>{history.push("/items/20")}} variant="contained" style={{backgroundColor:colors.yellow,marginBottom:"3%",width:"100%"}} fullWidth>
            <Box display="flex" justifyContent="space-between">

                <Box width="30%" justifyContent="center">
                        <img alt="1" src={Diamonds} style={imgStyle}/>
                </Box>
                <Box width="65%" display="flex" alignItems="center" justifyContent="center" >
                    <Box>
                        <Box style={{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",width:"45vw",fontSize:myFont,color:'#2A282A'}}>
                            {props.title}
                        </Box>
                        <Box style={{color:"#808080",justifyContent:"space-between"}}  paddingX="2%" >
                            {props.time}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Button>
        )
    }