import React from 'react';
import wolf from '../../images/howling-wolf.png';
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(() => ({
    image: {
        height: '40vh',
        opacity: '1',
        position: 'absolute',
        bottom: 0,
        left: 0,
    }
}));

export default () => {
    const classes = useStyles();
    return <img className={classes.image} src={wolf} alt="wolf"/>;
}