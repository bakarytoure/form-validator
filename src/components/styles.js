import {
  createMuiTheme,
  responsiveFontSizes,
  makeStyles,
} from "@material-ui/core/styles";
import { lightGreen } from "@material-ui/core/colors";
//import { amber } from "@material-ui/core/colors";

let theme = createMuiTheme({
  palette: {
    //type: "light",
    type: "dark",
    //primary: amber,
    primary: lightGreen,
    secondary: lightGreen,
    //secondary: amber,
  },
});

theme = responsiveFontSizes(theme);

const useStyle = makeStyles(() => ({
  root: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
}));

export { theme, useStyle };
