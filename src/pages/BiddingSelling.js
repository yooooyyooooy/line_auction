import React from "react";
import { Box, Typography, Button } from "@material-ui/core";
//components
import Navbar from "../components/Navbar";
import RoundPaperDesktop from "../components/RoundPaperDesktop";
import BackgroudDesktop from "../image/backgroundDesktop.svg";
import Diamonds from "../image/diamonds.svg";
import TimelapseIcon from "@material-ui/icons/Timelapse";
import EditIcon from "@material-ui/icons/Edit";

//colors
import colors from "../styles/colors";
export default function BiddingSelling() {
  return (
    <>
      <Navbar />
      <div style={{ position: "relative", height: "100%" }}>
        <img
          style={{
            position: "absolute",
            zIndex: -1,
            top: "-75px",
            maxWidth: "100%",
          }}
          src={BackgroudDesktop}
          alt="BackgroundDesktop"
        />
      </div>
      <Box marginTop="3%">
        <RoundPaperDesktop style={{ width: "80%", margin: "auto" }}>
          <Box style={{ width: "93%", margin: "3.5%" }}>
            <Box style={{ display: "flex" }}>
              <Box style={{ backgroundColor: colors.red, borderRadius: "8px" }}>
                <img src={Diamonds} alt="Diamonds" />
              </Box>
              <Box marginLeft="5%">
                <Box>
                  <Typography variant="h4" style={{ fontWeight: "bold" }}>
                    เพชรนำเข้าจากประเทศอังกฤษ
                  </Typography>
                </Box>
                <Box marginTop="2%">
                  <Typography style={{ color: colors.darkGrey }}>
                    เพชรเป็นอัญมณีรูปแบบหนึ่งของคาร์บอนจัดเรียงตัวเป็นทรงแปดหน้าเป็นแร่ที่
                    แข็งที่สุดตามสเกลของโมส์ (Moh's scale) มีค่าความแข็งเท่ากับ
                    10 เพชร มีหลายสี
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: colors.yellow,
                color: colors.darkGrey,
                borderRadius: "4px",
                padding: "1%",
                marginTop: "2%",
              }}
            >
              <TimelapseIcon fontSize="small" />
              <Box marginLeft="1%">
                <Typography variant="subtitle2">
                  เหลือเวลาประมูลอีก 20 นาที
                </Typography>
              </Box>
            </Box>
            <Box align="center" marginY="2%">
              <hr color={colors.lightGrey} borderradius="4" />
              <Typography variant="h6">
                ปัจจุบันมีเหรียญในการประมูล 79 เหรียญ
              </Typography>
              <Typography variant="h4" style={{ fontWeight: "bold" }}>
                890 บาท
              </Typography>
              <hr color={colors.lightGrey} borderradius="4" />
            </Box>
            <Box>
              <Button
                variant="contained"
                style={{ backgroundColor: "#FFD439", fontWeight: "bold" }}
                endIcon={<EditIcon />}
                fullWidth
              >
                แก้ไขข้อมูลการประมูล
              </Button>
            </Box>
          </Box>
        </RoundPaperDesktop>
      </Box>
      <Box marginTop="3%">
        <RoundPaperDesktop style={{ width: "80%", margin: "auto" }}>
          <Box style={{ width: "93%", margin: "3.5%" }}>
            <Box display="flex" justifyContent="flex-end">
              <Typography variant="h3" style={{ fontWeight: "bold" }}>
                ประวัติการประมูล
              </Typography>
            </Box>
          </Box>
        </RoundPaperDesktop>
      </Box>
    </>
  );
}
