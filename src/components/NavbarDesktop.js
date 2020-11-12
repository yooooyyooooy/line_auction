import React, { useCallback } from "react";
import { AppBar, Toolbar, Box, Button, Typography } from "@material-ui/core";
import colors from "../styles/colors.js";
import GavelIcon from "@material-ui/icons/Gavel";
import { useHistory } from "react-router-dom";

export default function NavbarDesktop() {
  const history = useHistory();
  //   const loginHandler = useCallback(
  //     (e) => {
  //       history.push("/login");
  //     },
  //     [history]
  //   );
  const homeHandle = useCallback(
    (e) => {
      history.push("/");
    },
    [history]
  );
  return (
    <AppBar style={{ backgroundColor: colors.darkBlue }} position="sticky">
      <Toolbar style={{ justifyContent: "space-between" }}>
        <Box
          width="92%"
          display="flex"
          justifyContent="space-between"
          margin="auto"
        >
          <Box style={{ display: "flex", alignItems: "center" }}>
            <span
              onClick={homeHandle}
              //   style={{ marginLeft: "20%", marginRight: "1.5%" }}
            >
              <GavelIcon />
            </span>
            <Box style={{ marginLeft: "1.5vw", color: "white" }}>
              <Typography>MASTER-METHOD BIDDING</Typography>
            </Box>
          </Box>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <Box style={{ marginRight: "1.5vw", color: "white" }}>
              <Typography>(Shop Name)</Typography>
            </Box>
            {/* <Button
              style={{ marginRight: "1.5vw", color: "white" }}
              onClick={loginHandler}
            >
              เข้าสู่ระบบ
            </Button> */}
            <Button
              variant="contained"
              style={{ backgroundColor: "#FFD439", fontWeight: "bold" }}
            >
              เข้าสู่หน้าร้านค้า
            </Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
