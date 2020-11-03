import React from "react"

//Components
import {Box,List,Typography} from "@material-ui/core" 
import RoundPaper from "./RoundPaper"
import GreenButton from "./GreenButton"

function FavoritesCard(){
  return (
    <Box marginTop="5%">
      <RoundPaper style={{width:"80%",margin:"auto"}}>
        <Typography>
          FAVOURITES
        </Typography>
        <List>
           
        </List> 
        <GreenButton text="SHOW ALL FAVOURITES"/>
      </RoundPaper>
    </Box>
  ) 
}

export default FavoritesCard