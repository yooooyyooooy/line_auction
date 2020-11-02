import React from "react"

//Components
import {Box, List,Typography} from "@material-ui/core" 
import RoundPaper from "./RoundPaper"

function OngoingCard(){
  return (
    <Box>
      <RoundPaper>
        <Typography>
          ON-GOING
        </Typography>
        <List>
           
        </List> 
      </RoundPaper>
    </Box>
  ) 
}

export default OngoingCard
