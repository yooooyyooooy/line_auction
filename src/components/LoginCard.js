import React from "react"
import RoundPaper from "./RoundPaper"
import {Box,TextField} from "@material-ui/core"
import GreenButton from "./GreenButton"
import NavigateNextIcon from "@material-ui/icons/NavigateNext";


export default function LoginCard() {
    return (
        <RoundPaper style={{width:"50%",margin:"auto",marginTop:"7%"}}>
            <Box style={{justifyContent:"center",display:"flex"}}>
                <h1>เข้าสู่ระบบ</h1>
            </Box>
            <Box width="95%" marginX="auto" marginTop="1%">
                <TextField id="outlined-basic" label="อีเมล" variant="outlined" style={{width:"100%"}} />
            </Box>
            <Box width="95%" marginX="auto" marginTop="3%">
                <TextField id="outlined-basic" label="รหัสผ่าน" variant="outlined" style={{width:"100%"}} />
            </Box>
            <Box width="90%" overflow="hidden" marginX="auto" marginTop="3%" >
                <Box style={{float:"right"}}>
                    <span>
                        ลืมรหัสผ่าน
                    </span>
                </Box>
            </Box>
            <Box width="95%" marginX="auto" marginTop="3%">
                <GreenButton text="เข้าสู่ระบบ" icon={<NavigateNextIcon />}/>
            </Box>
        </RoundPaper>

    )
}