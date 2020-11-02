import React from "react"
import {AppBar,Toolbar} from "@material-ui/core"
import colors from "../styles/colors.js"

export default function Navbar() {
    return (
        <AppBar style={{backgroundColor:colors.darkBlue}} position="sticky">
            <Toolbar>
            </Toolbar>
        </AppBar>
    )
}