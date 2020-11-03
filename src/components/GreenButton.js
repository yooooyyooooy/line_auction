import React from "react"
import {Button} from "@material-ui/core"
import colors from "../styles/colors"

export default function GreenButton(props) {
    return (
        <Button style={{backgroundColor : colors.green, width : "100%" , color:"white"}}>
            <div>
                {props.text}
            </div>
        </Button>
    )
}
