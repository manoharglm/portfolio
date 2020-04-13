import React from "react";
import useStyles from "../styles";
import Button from "@material-ui/core/Button";
import MailIcon from "@material-ui/icons/Mail";

export default function Contact() {
  const classes = useStyles();

  return (
    <div className={classes.aboutPage} id={"contactPage"}>
      <b className={classes.aboutPageBody}>I can help.</b>
      <br />
      <b className={classes.aboutPageBody}>
        If you have a project that you want to get started, think you need my
        help with something or just fancy saying hey, then get in touch.
      </b>
      <Button
        variant="contained"
        size="large"
        className={classes.button}
        startIcon={<MailIcon />}
        href="mailto:manohargunduboina@gmail.com"
      >
        MESSAGE ME
      </Button>
    </div>
  );
}
