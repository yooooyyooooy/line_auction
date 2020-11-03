import React from "react"

//Components
import {Box, List,Typography} from "@material-ui/core" 
import RoundPaper from "./RoundPaper"
import GreenButton from "./GreenButton"

function ShopsCard(){
  return (
    <Box>
      <RoundPaper style={{width:"80%",marginTop:"5%",margin:"auto"}}>
        <Typography>
          SHOPS
        </Typography>
        <List>
           
        </List> 
        <GreenButton text="SHOW ALL SHOPS"/>
      </RoundPaper>
    </Box>
  ) 
}

export default ShopsCard