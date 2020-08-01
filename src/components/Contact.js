import React from "react";
import useStyles from "../styles";
import Button from "@material-ui/core/Button";
import MailIcon from "@material-ui/icons/Mail";

export default function Contact(props) {
  const classes = useStyles();

  return (
    <div className={classes.aboutPage} id={"contactPage"}>
      <b className={classes.aboutPageBody}>I can help.</b>
      <br />
      <b className={classes.aboutPageBody}>
      {props?.body?.contact || ""}

      </b>
      <Button
        variant="contained"
        size="large"
        className={classes.button}
        startIcon={<MailIcon />}
        href={`mailto:${props?.body?.email ||  "manohargunduboina@gmail.com"}`}
      >
        MESSAGE ME
      </Button>
    </div>
  );
}
