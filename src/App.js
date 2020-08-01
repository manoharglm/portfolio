import React from "react";
import { useTheme } from "@material-ui/core/styles";
import { Drawer } from "@material-ui/core";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import PersonIcon from "@material-ui/icons/Person";
import DescriptionIcon from "@material-ui/icons/Description";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import Hidden from "@material-ui/core/Hidden";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Menu from "./components/Menu";
import $ from "jquery";
import useStyles from "./styles";
import About from "./components/About";
import Contact from "./components/Contact";
import Title from "./components/Title";
import "./App.css";
import axios from "axios";
import Skeleton from 'react-loading-skeleton';
 

export default function App(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [mobile, setMobile] = React.useState(
    window.matchMedia("(max-width: 767px)").matches
  );
  const [userData, setUserData] = React.useState([]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const saveUserData = () => {
    return axios
      .get("https://my-json-server.typicode.com/manoharglm/demo/db")
      .then(function (response) {
        return response;
      })
      .catch((error) => console.log(error));
  };

  React.useEffect(() => {
    saveUserData().then((res) => {
      setUserData(res.data);
    });
  }, [userData?.length]);

  const handleIconClick = (website) => {
    window.open(userData.links[website], "_blank");
  };

  const handleListItemClick = (divToFocus) => {
    mobile && handleDrawerToggle();
    scrollThere($(`#${divToFocus}`), 400);
  };

  function scrollThere(targetElement, speed) {
    $("html, body")
      .stop()
      .animate({ scrollTop: targetElement.offset().top }, speed, "swing");
  }

  $(window).on("resize", function () {
    window.matchMedia("(max-width: 767px)").matches
      ? !mobile && setMobile(true)
      : mobile && setMobile(false);
  });

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
      <Title
        profile={userData.profile}
        display={!mobile}
        handleIconClick={handleIconClick}
      />
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
          <ListItemText
            classes={{ primary: classes.listItemText }}
            primary={"About"}
          />
        </ListItem>
        <ListItem
          onClick={(_) => handleListItemClick("contactPage")}
          button
          key={"Contact"}
        >
          <ListItemIcon>
            <ContactMailIcon />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.listItemText }}
            primary={"Contact"}
          />
        </ListItem>
        <ListItem
          onClick={(_) => handleIconClick("resume")}
          button
          key={"Resume"}
        >
          <ListItemIcon>
            <DescriptionIcon />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.listItemText }}
            primary={"Resume"}
          />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <div className={classes.root}>
        <nav className={classes.drawer} aria-label="mailbox folders">
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaperMobile,
              }}
              ModalProps={{
                keepMounted: true,
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
        <div
          id={"background-container"}
          className={classes.backgroundContainer}
        >
          <Menu handleDrawerToggle={handleDrawerToggle} />
          <div>
            <div id={"indexPage"}>
              <Title display={mobile} handleIconClick={handleIconClick} />
              <div
                id={"background-mobile"}
                className={classes.background}
              ></div>
            </div>
            <About body={userData.body} />
            <Contact body={userData.body} />
          </div>
        </div>
      </div>
    </div>
  );
}
