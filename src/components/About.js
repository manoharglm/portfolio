import React from "react";
import useStyles from "../styles";

export default function About(props) {
  const classes = useStyles();

  return (
    <div className={classes.aboutPage} id={"aboutPage"}>
      <b className={classes.aboutPageBody}>Hi.</b>
      <br />
      <b className={classes.aboutPageBody}>{props?.body?.about || ""}</b>
      <br />
      <b className={classes.aboutPageBody}>Isn't that cool ?</b>
    </div>
  );
}
