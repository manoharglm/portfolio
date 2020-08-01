import React from "react";
import useStyles from "../styles";
import Button from "@material-ui/core/Button";
import MailIcon from "@material-ui/icons/Mail";
import Skeleton from "react-loading-skeleton";

export default function Contact(props) {
  const classes = useStyles();

  return (
    <div className={classes.aboutPage} id={"contactPage"}>
      <b className={classes.aboutPageBody}>
        {props?.body?.contact ? `I can help.` : <Skeleton width={"80%"} />}
      </b>
      <br />
      <b className={classes.aboutPageBody}>
        {props?.body?.contact || <Skeleton width={"80%"} />}
      </b>
      {props?.body?.contact ? (
        <Button
          variant="contained"
          size="large"
          className={classes.button}
          startIcon={<MailIcon />}
          href={`mailto:${props?.body?.email || "manohargunduboina@gmail.com"}`}
        >
          MESSAGE ME
        </Button>
      ) : (
        <Skeleton width={"80%"} />
      )}
    </div>
  );
}
