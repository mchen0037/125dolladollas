// returns a date object
export function convertTimestamp(timestamp) {
    return new Date(timestamp * 1000);
}

//Once you get the Date, you can call functions like:
// date.getHours()
// date.getMinutes();
// date.getSeconds();
// date.getFullYear();
// date.getMonth(); --this is 0 indexed, so 11 will correspond to December.
// date.getDate(); the day of the month
// date.getDay(); day of the week
