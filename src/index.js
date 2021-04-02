import { ThemeProvider } from "@material-ui/core";
import { blue, deepPurple } from "@material-ui/core/colors";
import { createMuiTheme } from '@material-ui/core/styles';
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/App";

const theme = createMuiTheme({
    palette: {
        primary: deepPurple,
        secondary: {
            main: '#ffeb3b',
        },
    },
    typography: {
        button: {
            textTransform: "none"
        }
    }

});

ReactDOM.render(<ThemeProvider theme={theme}><App /></ThemeProvider>, document.getElementById("root"));
