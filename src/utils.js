import moment from 'moment';

export const isToday = (timestamp) => {
    return moment.unix(timestamp).isSame(moment(), "day");
}

/** console log with a green background */
export const consoleLogGreen = (text) => {
    console.log(`%c${text}`, "background: green; color: white");
}
