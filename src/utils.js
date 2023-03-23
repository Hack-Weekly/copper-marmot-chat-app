import moment from 'moment';

export const isToday = (timestamp) => {
    return moment.unix(timestamp).isSame(moment(), "day");
}