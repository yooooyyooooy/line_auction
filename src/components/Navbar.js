import React from "react"
import {AppBar,Toolbar,Avatar} from "@material-ui/core"
import colors from "../styles/colors.js"
import GavelIcon from '@material-ui/icons/Gavel';

//redux
import { useSelector } from "react-redux";

export default function Navbar() {
    const informationUserReducer = useSelector(({ informationReducer }) => informationReducer);
    return (
        <AppBar style={{backgroundColor:colors.darkBlue}} position="sticky">
            <Toolbar style={{justifyContent:"space-between"}}>
                <GavelIcon fontSize="large"/>
                <Avatar src={informationUserReducer.userImage}>
                </Avatar>
            </Toolbar>
        </AppBar>
    )
}