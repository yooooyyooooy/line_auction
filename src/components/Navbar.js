import React from "react"
import {AppBar,Toolbar,Avatar,Icon,Container} from "@material-ui/core"
import colors from "../styles/colors.js"
import GavelIcon from '@material-ui/icons/Gavel';


export default function Navbar() {
    return (
        <AppBar style={{backgroundColor:colors.darkBlue}} position="sticky">
            <Toolbar style={{justifyContent:"space-between"}}>
                <GavelIcon fontSize="large"/>
                <Avatar style={{backgroundColor : colors.darkPink}}>
                    N
                </Avatar>
            </Toolbar>
        </AppBar>
    )
}