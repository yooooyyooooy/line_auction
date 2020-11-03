import React,{useCallback} from "react"
import {Button} from "@material-ui/core"
import colors from "../styles/colors"
import {useHistory} from "react-router-dom"


export default function GreenButton(props) {
    const history = useHistory() ;
    const presshandle = useCallback(e=>{
        history.push(props.dest)
    },[history,props.dest])
    return (
        <Button onClick={presshandle} style={{backgroundColor : colors.green, width : "100%" , color:"white"}} >
            <div>
                {props.text}
            </div>
        </Button>
    )
}
