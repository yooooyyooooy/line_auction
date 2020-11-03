import React from "react"

//Components
import {Box, List,Typography} from "@material-ui/core" 
import RoundPaper from "./RoundPaper"
import GreenButton from "./GreenButton"

function HistoryCard(){
  return (
    <Box>
      <RoundPaper style={{width:"80%",marginTop:"5%",margin:"auto"}}>
        <Typography>
          HISTORY
        </Typography>
        <List>
           
        </List>
        <GreenButton text="SHOW ALL HISTORY"/>
      </RoundPaper>
    </Box>
  ) 
}

export default HistoryCard