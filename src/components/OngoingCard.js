import React from "react"

//Components
import {Box, List,Typography} from "@material-ui/core" 
import RoundPaper from "./RoundPaper"
import GreenButton from "./GreenButton"

function OngoingCard(){
  return (
    <Box marginTop="5%">
      <RoundPaper style={{width:"80%",marginTop:"10%",margin:"auto"}}>
        <Typography>
          ON-GOING
        </Typography>
        <List>
           
        </List> 
        <GreenButton text="SHOW ALL ON-GOING"/>
      </RoundPaper>
    </Box>
  ) 
}

export default OngoingCard
