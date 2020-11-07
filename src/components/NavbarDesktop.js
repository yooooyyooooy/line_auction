import React,{useCallback} from "react";
import { AppBar, Toolbar, Box, Button ,Typography} from "@material-ui/core";
import colors from "../styles/colors.js";
import YellowButton from "./YellowButton";
import GavelIcon from "@material-ui/icons/Gavel"
import {useHistory} from "react-router-dom"



export default function NavbarDesktop() {
    const history = useHistory() ;
    const loginHandler = useCallback(e=> {
        history.push('/login') ;
      },[history])
    const homeHandle = useCallback(
        (e) => {
          history.push("/");
        },
        [history]
      );
    return (
        <AppBar style={{ backgroundColor: colors.darkBlue }} position="sticky">
            <Toolbar style={{ justifyContent: "space-between" }}>
                <Box width="100%" display="flex">
                    <div style={{width:"50%",display:"flex",alignItems:"center"}} >
                        <span onClick={homeHandle} style={{marginLeft:"18%",marginRight:"1.5%"}}>
                            <GavelIcon/>
                        </span>
                        <Typography style={{fontSize:"1.3rem"}}>Master-Method Bidding</Typography>
                    </div>
                    <Box width="50%" style={{display:"flex",alignItems:"center",justifyContent:"flex-end"}}>
                        <Box marginRight="18%">
                            <Button style={{marginRight:"1.5vw",color:"white"}} onClick={loginHandler}>
                                เข้าสู่ระบบ
                            </Button>
                            <YellowButton>
                                สมัครสมาชิก
                            </YellowButton>
                        </Box>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    )
}