import React, { useCallback} from "react";
import { AppBar, Toolbar, Avatar,Box,Typography } from "@material-ui/core";
import colors from "../styles/colors.js";
import GavelIcon from "@material-ui/icons/Gavel";
import { useHistory } from "react-router-dom";
import { isMobile, isBrowser } from "react-device-detect";
import NavbarDesktop from "./NavbarDesktop"
//redux
import { useSelector } from "react-redux";
import Coin from "../image/coin.svg" 


export default function Navbar() {
  const informationUserReducer = useSelector(
    ({ informationReducer }) => informationReducer
  );
  const history = useHistory();
  const homeHandle = useCallback(
    (e) => {
      history.push("/");
    },
    [history]
  );
  if (isMobile) {
    return (
      <>
        <AppBar style={{ backgroundColor: colors.darkBlue }} position="sticky">
          <Toolbar >
            <Box width="100%" display="flex">
              <Box width="50%" >
                <span onClick={homeHandle}>
                  <GavelIcon fontSize="large"/>
                </span>
              </Box>
              <Box width="50%" display="flex" alignItems="center" justifyContent="flex-end">
                <Box  height="70%" display="flex" alignItems="center" marginRight="10%">
                  <img style={{height:"80%"}} src={Coin} alt="coin"/>
                  <Typography style={{fontSize:"1.3rem",marginLeft:"10%"}}>
                    {informationUserReducer.credit}
                  </Typography>
                </Box>
                <Box marginLeft="5%" marginRight="1%">
                  <Avatar src={informationUserReducer.userImage}></Avatar>
                </Box>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </>
    );
  } else if (isBrowser) {
    return (
      <>
        <NavbarDesktop/>
      </>
    );
  }
}
