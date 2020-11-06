import React from "react";
import { AppBar, Toolbar, Box, Button ,Typography} from "@material-ui/core";
import colors from "../styles/colors.js";
import YellowButton from "./YellowButton";
import GavelIcon from "@material-ui/icons/Gavel"



export default function NavbarDesktop() {
    return (
        <AppBar style={{ backgroundColor: colors.darkBlue }} position="sticky">
            <Toolbar style={{ justifyContent: "space-between" }}>
                <Box width="100%" display="flex">
                    <div style={{width:"50%",display:"flex",justifyContent:"center",alignItems:"center"}} >
                        <GavelIcon style={{marginRight:"6%"}}/>
                        <Typography style={{fontSize:"1.3rem"}}>Master-Method Bidding</Typography>
                    </div>
                    <Box width="50%" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <Box>
                            <Button style={{marginRight:"1.5vw",color:"white"}}>
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