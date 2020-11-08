import React,{useState,useEffect} from "react";

//Components
import { Box, List,Typography } from "@material-ui/core";
import RoundPaper from "./RoundPaper";
import GreenButton from "./GreenButton";
import ShopTwoIcon from "@material-ui/icons/ShopTwo";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
// import ShopsComponentCard from  "./ShopsComponentCard"

import { makeStyles } from "@material-ui/core/styles";
import colors from "../styles/colors";
import { firestore } from "../utils/setFirebase";


const useStyles = makeStyles((theme) => ({
  headers: {
    color: colors.blue,
    display: "flex",
    justifyContent: "flex-end",
  },
}));

function ShopsCard({data}) {
  const classes = useStyles();
  const [shops, setShops] = useState([])
  useEffect(() => {
    setShops([]);
    if (data && data !== "") {
      let v = [];
      firestore
        .collection("items")
        .get()
        .then(function(snapshot){
          console.log("hooo");
          snapshot.forEach(function (doc) {
            if (data.includes(doc.id)) {
              let x = doc.data();
              x.ID = doc.id;
              v.push(x);
            }
          });
          setShops(v);
        });
    }
  }, [data]);
  return (
    <Box marginTop="5%">
      <RoundPaper style={{ width: "80%", margin: "auto" }}>
        <Box className={classes.headers}>
          <Box marginRight="1rem">
            <ShopTwoIcon fontSize="small" />
          </Box>
          <Box>
            <Typography style ={{fontWeight : "bold"}}>SHOPS</Typography>
          </Box>
        </Box>
        <List>

        {shops &&
              shops.map((e, index) => {
                return (
                  // <shoppa
                  //   key={index}
                  //   title={e.title}
                  //   id={e.ID}
                  //   time="เหลือเวลาอีก 20 นาที"
                  // />
                  <li>{e}</li>
                );
              })}

        </List>
        <GreenButton text="SHOW ALL SHOPS" dest="/shops" icon = {<NavigateNextIcon/>} />
      </RoundPaper>
    </Box>
  );
}

export default ShopsCard;
