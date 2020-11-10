import React, { useState, useEffect } from "react";

//Components
import { Box, List, Typography } from "@material-ui/core";
import RoundPaper from "./RoundPaper";
import NavButton from "./NavButton";
import ReplayIcon from "@material-ui/icons/Replay";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { makeStyles } from "@material-ui/core/styles";
import colors from "../styles/colors";
import ItemCard from "./ItemCard";

import { firestore } from "../utils/setFirebase";

const useStyles = makeStyles((theme) => ({
  headers: {
    color: colors.blue,
    display: "flex",
    justifyContent: "flex-end",
  },
}));

function HistoryCard({ data }) {
  const classes = useStyles();
  const [dataHistory, setDataHistory] = useState([]);
  useEffect(() => {
    let unmounted = false;
    setDataHistory([]);
    if (data && data !== "") {
      let v = [];
      firestore
        .collection("items")
        .get()
        .then(function (snapshot) {
          snapshot.forEach(function (doc) {
            if (!unmounted) {
              if (data.includes(doc.id)) {
                let x = doc.data();
                x.ID = doc.id;
                v.push(x);
              }
            }
          });
          console.log(v);
          setDataHistory(v);
        });
    }
    return () => {
      unmounted = true;
    };
  }, [data]);
  return (
    <Box marginTop="5%">
      <RoundPaper style={{ width: "80%", margin: "auto" }}>
        <Box className={classes.headers}>
          <Box marginRight="1rem">
            <ReplayIcon fontSize="small" />
          </Box>
          <Box>
            <Typography style={{ fontWeight: "bold" }}>HISTORY</Typography>
          </Box>
        </Box>
        <Box marginTop="3%">
          <List>
            {dataHistory &&
              dataHistory.map((e, index) => {
                return (
                  <ItemCard
                    key={index}
                    title={e.title}
                    mostValue={e.mostValue.value}
                    id={e.ID}
                    time="เหลือเวลาอีก 20 นาที"
                  />
                );
              })}
          </List>
        </Box>
        <NavButton
          text="SHOW ALL HISTORY"
          dest="/history"
          icon={<NavigateNextIcon />}
        />
      </RoundPaper>
    </Box>
  );
}

export default HistoryCard;
