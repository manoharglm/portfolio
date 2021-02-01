import React from "react";
import { IconButton } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Twitter";
import useStyles from "../styles";
import Skeleton from 'react-loading-skeleton';

export default function Title(props) {
  const classes = useStyles();
  return (
  	props.display
    ? <div className={classes.introductionContainer}>
      <b className={classes.introduction}>{props?.profile?.firstName || <Skeleton width={'80%'}/>}</b>
      <br />
      <b className={classes.introduction}>{props?.profile?.lastName || <Skeleton width={'80%'}/>}</b>
      <br />
      <b className={classes.introductionCredential}>
      {props?.profile?.title || <Skeleton width={'80%'}/>}
      </b>
      <div className={classes.introductionIcons}>
        <IconButton
          aria-label="github"
          onClick={(_) => props.handleIconClick("github")}
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          aria-label="linkedin"
          onClick={(_) => props.handleIconClick("linkedin")}
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          aria-label="instagram"
          onClick={(_) => props.handleIconClick("instagram")}
        >
          <InstagramIcon />
        </IconButton>
      </div>
    </div>
    : null

  );
}
