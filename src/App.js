import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Drawer, IconButton } from "@material-ui/core";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import PersonIcon from "@material-ui/icons/Person";
import MailIcon from '@material-ui/icons/Mail';
import DescriptionIcon from "@material-ui/icons/Description";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import Hidden from "@material-ui/core/Hidden";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MediaCard from "./MediaCard";
import Avatar from "./images/manohar.jpg";
import Button from '@material-ui/core/Button';

const drawerWidth = "30%";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    padding: 0,
    overflowX: "hidden",
  },
  backgroundContainer: {
    display: "grid",
    gridTemplateColumns: "30% 70%",
  },
  background: {
    backgroundImage: `url(${Avatar})`,
    background: "white",
    backgroundPosition: "top center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    overflowX: "hidden",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  introductionContainer: {
    textAlign: "center",
    marginTop: 16,
  },
  button: {
    color: "#494c4e",
    fontFamily: ["Libre Baskerville", "Roboto", "monaco", "sans-serif"].join(
      ","
    ),
    fontSize: "1em",
    fontWeight: 'bold',
    margin: 15
  },
  introduction: {
    color: "#494c4e",
    fontFamily: ["Libre Baskerville", "Roboto", "monaco", "sans-serif"].join(
      ","
    ),
    fontSize: "2em",
  },
  introductionCredential: {
    color: "#494c4e",
    fontFamily: ["Libre Baskerville", "Roboto", "monaco", "sans-serif"].join(
      ","
    ),
    fontSize: "1em",
  },
  introductionIcons: {
    marginLeft: "30%",
    marginRight: "30%",
    margin: 15,
    display: "flex",
    justifyContent: "space-around",
  },
  aboutPage: {
    width: "100%",
    height: "100vh",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  aboutPageBody: {
    color: "#494c4e",
    fontFamily: ["Libre Baskerville", "Roboto", "monaco", "sans-serif"].join(
      ","
    ),
    fontSize: "1.5em",
    marginLeft: "25%",
    marginRight: "25%",
  },
  anchorTaag: {
    color: "inherit",
  },
  listItemText: {
    fontFamily: ["Libre Baskerville", "Roboto", "monaco", "sans-serif"].join(
      ","
    ),
    fontWeight: 800,
  },
}));

const socialUrl = {
  github: "https://github.com/manoharglm",
  linkedin: "https://www.linkedin.com/in/manoharglm/",
  instagram: "https://www.instagram.com/the_duude_abides/",
  resume:
    "https://drive.google.com/file/d/1betag4FLZJ3AcuqCf1jFBpxJS8dwxT0F/view?usp=sharing",
};

export default function App(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const aboutPage = React.createRef();
  const contactPage = React.createRef();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleIconClick = (website) => {
    window.open(socialUrl[website], "_blank");
  };

  const handleListItemClick = (divToFocus) => {
    if (divToFocus.current) {
      divToFocus.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  };

  const drawer = (
    <div>
      <div className={classes.introductionContainer}>
        <b className={classes.introduction}>Manohar</b>
        <br />
        <b className={classes.introduction}>Gunduboina</b>
        <br />
        <b className={classes.introductionCredential}>
          MERN Stack & React Native Developer
        </b>
        <div className={classes.introductionIcons}>
          <IconButton
            aria-label="github"
            onClick={(_) => handleIconClick("github")}
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            aria-label="linkedin"
            onClick={(_) => handleIconClick("linkedin")}
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            aria-label="instagram"
            onClick={(_) => handleIconClick("instagram")}
          >
            <InstagramIcon />
          </IconButton>
        </div>
      </div>

      <Divider />
      <List>
        <ListItem onClick={_ => handleListItemClick(aboutPage)} button key={"About"}>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText classes={classes.listItemText} primary={"About"} />
        </ListItem>
        <ListItem onClick={_ => handleListItemClick(contactPage)} button key={"Contact"}>
          <ListItemIcon>
            <ContactMailIcon />
          </ListItemIcon>
          <ListItemText classes={classes.listItemText} primary={"Contact"} />
        </ListItem>
        <ListItem
          onClick={(_) => handleIconClick("resume")}
          button
          key={"Resume"}
        >
          <ListItemIcon>
            <DescriptionIcon />
          </ListItemIcon>
          <ListItemText classes={classes.listItemText} primary={"Resume"} />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <div className={classes.root}>
        <nav className={classes.drawer} aria-label="mailbox folders">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <div className={classes.backgroundContainer}>
          <MediaCard handleDrawerToggle={handleDrawerToggle} />
          <div>
            <div className={classes.background}></div>
            <div className={classes.aboutPage} ref={aboutPage}>
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
                That means I can build you websites, Android and iOS
                applications
              </b>
              <b className={classes.aboutPageBody}>Isn't that cool ?</b>
            </div>
            <div className={classes.aboutPage} ref={contactPage}>
              <b className={classes.aboutPageBody}>I can help.</b>
              <br />
              <b className={classes.aboutPageBody}>
                If you have a project that you want to get started, think you
                need my help with something or just fancy saying hey, then get
                in touch.
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
          </div>
        </div>
      </div>
    </div>
  );
}
