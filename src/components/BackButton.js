import React from "react"
import {Button} from "@material-ui/core"
import colors from "../styles/colors"

import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
export default function BackButton() {
    return (
        <Button startIcon={<NavigateBeforeIcon/>} style={{color:colors.grey}}>
            <div>
                BACK
            </div>
        </Button>
    )
}