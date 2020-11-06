import React from "react";
import { Box, Typography, Button } from "@material-ui/core";
import backGroundDesktop from "../image/backgroundDesktop.svg";
import imageDesktop from "../image/imageDesktop.svg";
import YellowButton from "./YellowButton"
import Background from "./Background"
export default function LandingDesktop() {
  return (
    <>
      <Box width="100%">
        <Background/>
        <Box
          display="flex"
          justifyContent="center"
          flexWrap="wrap"
          marginTop="3em"
        >
          <Box
            width="550px"
            height="249px"
            color="white"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Box>
              <Typography>HAVE SOMETHING TO BID?</Typography>
              <Typography>DON'T LET IT SLIT</Typography>
            </Box>
            <Box>
              JOIN US IN THE BIDDING COMMUNITY WHERE BIDDING IS EASIER THAN
              EVER!
            </Box>
            <Box width="50%" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <Box>

                            <Button variant="outlined" style={{marginRight:"1.5vw",color:"white"}}>
                                เข้าสู่ระบบ
                            </Button>
                            <YellowButton>
                                สมัครสมาชิก
                            </YellowButton>
                        </Box>
                    </Box>
          </Box>

          <Box width="400px" height="400px">
            <img src={imageDesktop} alt="imageDesktop" />
          </Box>
        </Box>
      </Box>
    </>
  );
}
