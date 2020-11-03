import React from "react"

import colors from "../styles/colors"
import FavoritesCard from "../components/FavoritesCard"
import Navbar from "../components/Navbar"
import {makeStyles} from "@material-ui/core/styles"
import {Box,Typography} from "@material-ui/core"
import Intersect from "../image/Intersect.svg"

/* initialize fontSize for responsive mode */
const headerFontSize = {
    xs: "1.3rem",
    sm: "1.5rem",
    md: "1.7rem"
  }

export default function Home() {
    return (
        <>
            <Navbar/>
            <div style={{position:"relative",height:"100%"}}>
                <img style={{position:"absolute",zIndex:-1,top:"-25vh",maxWidth:"100%"}} src={Intersect} alt="Intersect"/>
            </div>
            <Box style={{marginTop:"5%",marginLeft:"7%"}}>
                <Typography style={{fontSize:headerFontSize.xs,color : colors.white}}>WELCOME BACK !</Typography>
            </Box>
            <Box style={{marginTop:"2%",marginLeft:"15%"}}>
                <Typography style={{fontSize:headerFontSize.md,color : colors.white}}>Poon</Typography>
            </Box>
        </>
    )
}