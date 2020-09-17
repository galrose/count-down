import {DAY, MONTH} from "../../config/config";

export const calculateTimeLeft = () => {
    const year = new Date().getFullYear();
    const difference = +new Date(`${MONTH}/${DAY}/${year}`) - +new Date();


    return difference > 0 && ({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
    })
}