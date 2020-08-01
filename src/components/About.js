import React from "react";
import useStyles from "../styles";
import Skeleton from 'react-loading-skeleton';

export default function About(props) {
  const classes = useStyles();
  return (
    <div className={classes.aboutPage} id={"aboutPage"}>
      <b className={classes.aboutPageBody}>{props?.body?.about ? `Hi.` : <Skeleton width={'80%'}/>}</b>
      <br />
      <b className={classes.aboutPageBody}>{props?.body?.about || <Skeleton width={'80%'}/>}</b>
      <br />
      <b className={classes.aboutPageBody}>{props?.body?.about ? `Isn't that cool ?` : <Skeleton width={'80%'}/>}</b>
    </div>
  );
}
