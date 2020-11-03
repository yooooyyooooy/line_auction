import React from "react"

//Components
import { List,Typography} from "@material-ui/core" 
import RoundPaper from "./RoundPaper"
import GreenButton from "./GreenButton"

function FavoritesCard(){
  return (
    <div style={{marginLeft:"auto"}}>
      <RoundPaper style={{width:"80%",marginTop:"5%",margin:"auto"}}>
        <Typography>
          FAVOURITES
        </Typography>
        <List>
           
        </List> 
        <GreenButton text="SHOW ALL FAVOURITES"/>
      </RoundPaper>
    </div>
  ) 
}

export default FavoritesCard