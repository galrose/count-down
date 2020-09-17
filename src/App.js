import React from 'react';
import {makeStyles} from "@material-ui/styles";
import CountDownContainer from "./components/containers/CountDownContainer";
import SigitWhite from "./components/images/SigitWhite";

const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: '#363636',
        height: '100vh',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
}))

const App = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CountDownContainer/>
            <SigitWhite/>
        </div>
    )
}

export default App;
