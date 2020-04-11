import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: 1,
  },
  media: {
    height: "90vh",
    marginRight: 150,
  },
  introduction: {
    color: "#494c4e",
    fontFamily: ["Libre Baskerville", "Roboto", "monaco", "sans-serif"].join(
      ","
    ),
    fontSize: "2em",
    textAlign: "right",
  },
  tags: {
    color: "white",
    backgroundColor: "black",
    fontFamily: ["Roboto", "monaco", "sans-serif"].join(","),
    fontWeight: 800,
    fontSize: 25,
    textAlign: "right",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2)/2,
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={props.handleDrawerToggle}
        className={classes.menuButton}
      >
        <MenuIcon />
      </IconButton>
      <b className={classes.introduction}>Manohar</b>
      <br />
      <b className={classes.introduction}>Gunduboina</b>
      <br />
      <b className={classes.introduction}>Full Stack Developer</b>
      <br />
    </div>
  );
}
