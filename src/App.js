import React from "react";
import { useTheme } from "@material-ui/core/styles";
import { Drawer, IconButton } from "@material-ui/core";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import PersonIcon from "@material-ui/icons/Person";
import DescriptionIcon from "@material-ui/icons/Description";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import Hidden from "@material-ui/core/Hidden";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MediaCard from "./MediaCard";
import $ from "jquery";
import useStyles from "./styles";
import About from "./components/About";
import Contact from "./components/Contact";

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

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleIconClick = (website) => {
    window.open(socialUrl[website], "_blank");
  };

  const handleListItemClick = (divToFocus) => {
    scrollThere($(`#${divToFocus}`), 400);
  };

  function scrollThere(targetElement, speed) {
    $("html, body")
      .stop()
      .animate({ scrollTop: targetElement.offset().top }, speed, "swing");
  }

  $(window).on("mousewheel", function (e) {
    var div1y = $("#indexPage").offset().top,
      div2y = $("#aboutPage").offset().top,
      div3y = $("#contactPage").offset().top,
      lastScrollTop = $(this).scrollTop(),
      scrollDirection,
      targetUp,
      targetDown,
      targetElement;

    if (e.originalEvent.deltaY <= 0) {
      scrollDirection = "up";
    } else if (e.originalEvent.deltaY > 0) {
      scrollDirection = "down";
    }

    e.preventDefault();

    if (lastScrollTop === div1y) {
      targetUp = $("#indexPage");
      targetDown = $("#aboutPage");
    } else if (lastScrollTop === div2y) {
      targetUp = $("#indexPage");
      targetDown = $("#contactPage");
    } else if (lastScrollTop === div3y) {
      targetUp = $("#aboutPage");
      targetDown = $("#contactPage");
    } else if (lastScrollTop < div2y) {
      targetUp = $("#indexPage");
      targetDown = $("#aboutPage");
    } else if (lastScrollTop < div3y) {
      targetUp = $("#aboutPage");
      targetDown = $("#contactPage");
    }

    if (scrollDirection === "down") {
      targetElement = targetDown;
    } else if (scrollDirection === "up") {
      targetElement = targetUp;
    }

    scrollThere(targetElement, 400);
  });

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
        <ListItem
          onClick={(_) => handleListItemClick("aboutPage")}
          button
          key={"About"}
        >
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText classes={classes.listItemText} primary={"About"} />
        </ListItem>
        <ListItem
          onClick={(_) => handleListItemClick("contactPage")}
          button
          key={"Contact"}
        >
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
            <div className={classes.background} id={"indexPage"}></div>
            <About />
            <Contact/>
          </div>
        </div>
      </div>
    </div>
  );
}
