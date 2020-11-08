import React from "react";

//components
import colors from "../styles/colors";
import { Box, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { isTablet } from "react-device-detect";


const headerFontSize = {
  xs: "1.3rem",
  sm: "1.5rem",
  md: "1.7rem",
  xl: "2.3rem",
};

export default function ShopsComponentCard(props) {
  const history = useHistory();
  const myFont = isTablet ? headerFontSize.xl : headerFontSize.xs
  return (
    <>
      <Button onClick={()=>{history.push("/items/10")}} variant="contained" style={{backgroundColor:colors.white,marginBottom:"3%", textAlign : "left"}} fullWidth >
            <Box display="flex" >
                <Box width= '80%' display="flex" alignItems="center" justifyContent="center" >
                    <Box>
                        <Box style={{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",width:"60vw",fontSize:myFont,color:'#2A282A'}}>
                            {props.shoptitle}
                        </Box>
                        <Box style={{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",width:"60vw",fontSize:myFont,color:'#808080'}}>
                            {props.details}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Button>
    </>
  );
}
