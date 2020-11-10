import React, { useEffect, useState } from "react";

//Components
import { Box, List, Typography } from "@material-ui/core";
import RoundPaper from "./RoundPaper";
import NavButton from "./NavButton";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

import { makeStyles } from "@material-ui/core/styles";
import colors from "../styles/colors";
import ItemCard from "./ItemCard";
import { firestore } from "../utils/setFirebase";

const useStyles = makeStyles((theme) => ({
  headers: {
    color: colors.red,
    display: "flex",
    justifyContent: "flex-end",
  },
}));

function OngoingCard({ data }) {
  const classes = useStyles();
  const [allOnbidding, setAllOnbidding] = useState([]);
  useEffect(() => {
    let unmounted = false;
    setAllOnbidding([]);
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
          setAllOnbidding(v);
        });
    }
    return () => {
      unmounted = true;
    };
  }, [data]);

  return (
    <Box marginTop="0%">
      <RoundPaper style={{ width: "80%", margin: "auto" }}>
        <Box className={classes.headers}>
          <Box marginRight="1rem">
            <FiberManualRecordIcon fontSize="small" />
          </Box>
          <Box>
            <Typography style={{ fontWeight: "bold" }}>ON-GOING</Typography>
          </Box>
        </Box>
        <Box marginTop="3%">
          <List>
            {allOnbidding &&
              allOnbidding.map((e, index) => {
                return (
                  <ItemCard
                    key={index}
                    title={e.title}
                    id={e.ID}
                    endAt={e.endAt}
                    startAT={e.startAt}
                  />
                );
              })}
          </List>
        </Box>
        <NavButton
          text="SHOW ALL ON-GOING"
          dest="/ongoing"
          icon={<NavigateNextIcon />}
        />
      </RoundPaper>
    </Box>
  );
}

export default OngoingCard;
