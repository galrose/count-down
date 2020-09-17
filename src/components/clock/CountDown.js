import React from "react";
import {makeStyles} from "@material-ui/styles";
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles(() => ({
    card: {
        backgroundColor: 'rgb(64,64,64)',
        display: 'flex',
        height: '30vh',
        width: '15vw',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 999,
    },
    numbers: {
        color: 'white',
        fontSize: '10vh',
    },

    units: {
        fontSize: '3vh',
    }
}));

export default ({number, unitOfTime}) => {
    const classes = useStyles();
    return (
        <Paper className={classes.card}>
            <Typography className={classes.numbers}>{number}</Typography>
            <Typography className={classes.units}>{unitOfTime}</Typography>
        </Paper>

    )

}
