import React from "react"

//Components
import {Box, List,Typography} from "@material-ui/core" 
import RoundPaper from "./RoundPaper"

function FavoritesCard(){
  return (
    <Box>
      <RoundPaper>
        <Typography>
          FAVOURITES
        </Typography>
        <List>
           
        </List> 
      </RoundPaper>
    </Box>
  ) 
}

export default FavoritesCard