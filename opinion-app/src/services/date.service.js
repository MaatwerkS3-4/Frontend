export const getTimeDifference = (date) =>{
    let current = new Date();
    let previous = date;


    var elapsed = current - previous;
    return Math.round(elapsed/1000);
    // if (elapsed < msPerMinute) {
    //     return Math.round(elapsed/1000) + ' seconden geleden';
    // }

    // else if (elapsed < msPerHour) {
    //     return Math.round(elapsed/msPerMinute) + ' minuten geleden';
    // }

    // else if (elapsed < msPerDay ) {
    //     return Math.round(elapsed/msPerHour ) + ' uur geleden';
    // }

    // else if (elapsed < msPerMonth) {
    //     return 'ongeveer ' + Math.round(elapsed/msPerDay) + ' dagen geleden';
    // }

    // else if (elapsed < msPerYear) {
    //     return 'approximately ' + Math.round(elapsed/msPerMonth) + ' months ago';
    // }

    // else {
    //     return 'approximately ' + Math.round(elapsed/msPerYear ) + ' years ago';
    // }
}