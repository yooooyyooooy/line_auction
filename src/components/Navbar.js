import React from "react"
import {AppBar,Toolbar,Menu} from "@material-ui/core"
import colors from "../styles/colors.js"

export default function Navbar() {
    return (
        <AppBar style={{backgroundColor:colors.darkBlue}} position="sticky">
            <Toolbar>
                <h3>Line Auction</h3>
            </Toolbar>
        </AppBar>
    )
}