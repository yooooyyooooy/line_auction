import React, { useCallback } from "react";
import { AppBar, Toolbar, Avatar } from "@material-ui/core";
import colors from "../styles/colors.js";
import GavelIcon from "@material-ui/icons/Gavel";
import { useHistory } from "react-router-dom";
import { isMobile, isBrowser } from "react-device-detect";
import NavbarDesktop from "./NavbarDesktop"
//redux
import { useSelector } from "react-redux";

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
          <Toolbar style={{ justifyContent: "space-between" }}>
            <span onClick={homeHandle}>
              <GavelIcon fontSize="large" />
            </span>
            <Avatar src={informationUserReducer.userImage}></Avatar>
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
