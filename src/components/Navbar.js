import React,{useCallback} from "react"
import {AppBar,Toolbar,Avatar} from "@material-ui/core"
import colors from "../styles/colors.js"
import GavelIcon from '@material-ui/icons/Gavel';
import {useHistory} from "react-router-dom"
//redux
import { useSelector } from "react-redux";

export default function Navbar() {
    const informationUserReducer = useSelector(({ informationReducer }) => informationReducer);
    const history = useHistory()
    const homeHandle = useCallback(e => {
        history.push("/")
    },[history])
    return (
        <AppBar style={{backgroundColor:colors.darkBlue}} position="sticky">
            <Toolbar style={{justifyContent:"space-between"}}>
                <span onClick={homeHandle}>
                    <GavelIcon fontSize="large"/>
                </span>
                <Avatar src={informationUserReducer.userImage}>
                </Avatar>
            </Toolbar>
        </AppBar>
    )
}