import { makeStyles } from "@material-ui/core/styles";
import Avatar from "./images/greetings.gif";

const drawerWidth = "30%";

const useStyles = makeStyles((theme) => ({
    root: {
      margin: 0,
      padding: 0,
      overflowX: "hidden",
    },
    background: {
      backgroundImage: `url(${Avatar})`,
      background: "white",
      backgroundPosition: "center",
      backgroundSize: "contain",
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
    drawerPaperMobile: {
      width: 240,
    },
    introductionContainer: {
      textAlign: "center",
      marginTop: 16,
    },
    button: {
      color: "#000000",
      fontFamily: ["Libre Baskerville", "Roboto", "monaco", "sans-serif"].join(
        ","
      ),
      fontSize: "1em",
      fontWeight: 'bold',
      margin: 15
    },
    introduction: {
      color: "#000000",
      fontFamily: ["Libre Baskerville", "Roboto", "monaco", "sans-serif"].join(
        ","
      ),
      fontSize: "2em",
    },
    introductionCredential: {
      color: "#000000",
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
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      textAlign: "center",
    },
    aboutPageContainer: {
      textAlign: "center",
    },
    aboutPageBody: {
      color: "#000000",
      fontFamily: ["Libre Baskerville", "Roboto", "monaco", "sans-serif"].join(
        ","
      ),
      fontSize: "1.5em",
      marginLeft: "20%",
      marginRight: "20%",
      textAlign: "center",

    },
    anchorTaag: {
      color: "inherit",
    },
    listItemText: {
      color: "#000000",
      fontFamily: ["Libre Baskerville", "Roboto", "monaco", "sans-serif"].join(
        ","
      ),
      fontWeight: "bold",
      fontSize: "1.2em",
    },
  }));

  export default useStyles