import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: 1,
  },
  menuButton: {
    position: "fixed",
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2) / 2,
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

export default function Menu(props) {
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

    </div>
  );
}
