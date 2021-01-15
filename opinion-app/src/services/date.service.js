export const getTimeDifference = (date) =>{
    let current = new Date();

    // let msPerMinute = 60 * 1000;
    // let msPerHour = msPerMinute * 60;
    // let msPerDay = msPerHour * 24;
    // let msPerMonth = msPerDay * 30;
    // let msPerYear = msPerDay * 365;

    let elapsed = current - date;
    return Math.round(elapsed/1000);
}