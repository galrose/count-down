import React from 'react';
import {makeStyles} from "@material-ui/styles";
import CountDownContainer from "./components/containers/CountDownContainer";
import SigitWhite from "./components/images/SigitWhite";
import {createMuiTheme} from "@material-ui/core";
import ThemeProvider from "@material-ui/styles/ThemeProvider";

const theme = createMuiTheme({
    typography: {
        fontFamily: 'digital7, Arial',
    }
});


const useStyles = makeStyles(() => ({
    'root': {
        backgroundColor: '#363636',
        height: '100vh',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
}))

const App = () => {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
                <CountDownContainer/>
                <SigitWhite/>
            </div>
        </ThemeProvider>
    )
}

export default App;
