import React from "react"

// MATERIAL UI COMPONENTS
import { makeStyles } from "@material-ui/core/styles"
import CircularProgress from "@material-ui/core/CircularProgress"

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(255, 255, 255, 0.25)",
    backdropFilter: "blur(2px)",
    zIndex: 9999999999
  }
}))

export default function Loading({ open }) {
  const classes = useStyles()

  if (open) {
    return (
      <div className={classes.root}>
        <CircularProgress color="primary" />
      </div>
    )
  } else {
    return <></>
  }
}
