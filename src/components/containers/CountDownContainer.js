import React from "react";
import {calculateTimeLeft} from "../clock/utils";
import CountDown from "../clock/CountDown";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(() => ({
    timesUp: {
        fontSize: '30vh',
        color: 'rgb(144,37,37)',
        zIndex: 999,
    }
}));

export default ()=>{
    const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft());
    const classes = useStyles();

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        // Clear timeout if the component is unmounted
        return () => clearTimeout(timer);
    });

    const timerComponents = Object.entries(timeLeft).map(
        ([unitOfTime, value]) =>
                 <CountDown number={value} unitOfTime={unitOfTime}/>
    );

    return (timerComponents.length
        ? timerComponents
        : <Typography className={classes.timesUp}>Time's up!</Typography>)

}