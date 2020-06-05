import React from "react";
import ReactDOM from "react-dom";
import { green, orange } from "@material-ui/core/colors";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Para from "./Para";
import * as serviceWorker from "./serviceWorker";

const muiTheme = createMuiTheme({
  palette: {
    primary: {
      //   light: "#6b352c",
      main: orange[300],
      //   dark: "#220000",
      //   contrastText: "#fff"
    },
    secondary: {
      //light: "#fff",
      main: green[400],
      //dark: "#bfbeb4",
      //contrastText: "#000"
    },
    type: "dark"
  },
  typography: {
    h5: {
      fontFamily : "Roboto",
    }
  }
});

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={muiTheme}>
      <Para />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
