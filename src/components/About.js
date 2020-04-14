import React from "react";
import useStyles from "../styles";

export default function About() {
  const classes = useStyles();

  return (
    <div className={classes.aboutPage} id={"aboutPage"}>
      <b className={classes.aboutPageBody}>Hi.</b>
      <br />
      <b className={classes.aboutPageBody}>
        I'm Manohar, Fullstack Developer based in Mumbai, India
      </b>
      <b className={classes.aboutPageBody}>
        I have proffessional experience in{" "}
        <a
          className={classes.anchorTaag}
          href={"https://www.educative.io/edpresso/what-is-mern-stack"}
          rel="noopener noreferrer"
          target="_blank"
        >
          MERN stack
        </a>{" "}
        and{" "}
        <a
          className={classes.anchorTaag}
          href={"https://reactnative.dev/"}
          rel="noopener noreferrer"
          target="_blank"
        >
          React Native{" "}
        </a>
      </b>
      <b className={classes.aboutPageBody}>
        I can build you websites, Android and iOS applications
      </b>
      <b className={classes.aboutPageBody}>Isn't that cool ?</b>
    </div>
  );
}
