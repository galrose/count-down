import React from 'react';
import white from '../../images/sigit-white.png';
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(() => ({
    image: {
        height:'85vh',
        opacity: '1',
        right: 0,
        zIndex: 1,
    }
}));

export default () => {
    const classes = useStyles();
    return <img className={classes.image} src={white} alt="white"/>;
}