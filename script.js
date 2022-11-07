let aMinute = 60;
let anHour = aMinute * 60;
let aDay = anHour * 24;
let aWeek = aDay * 7;
let aMonth = aDay * 30;
let aYear = aMonth * 12;

function fromNow(date) {
    const now = new Date()    // return date;
    let seconds = (now - date) / 1000;

    let result = seconds;
    let unit = 'second(s)'


    if (seconds >= aMinute && seconds < anHour) {
        result = seconds / aMinute;
        unit = 'minute(s)';
    } else if (seconds >= anHour && seconds < aDay) {
        result = seconds / anHour;
        unit = 'hour(s)';
    } else if (seconds >= aDay && seconds < aWeek) {
        result = seconds / aDay;
        unit = 'day(s)';
    } else if (seconds >= aWeek && seconds < aMonth) {
        result = seconds / aWeek;
        unit = 'week(s)';
    } else if (seconds >= aMonth && seconds < aYear) {
        result = seconds / aMonth;
        unit = 'month(s)';
    } else if (seconds >= aYear) {
        result = seconds / aYear;
        unit = 'year(s)';
    }

    result = Math.floor(result);

    return `${result} ${unit} ago`;
}

let output = document.getElementById('output');

output.innerHTML += fromNow(new Date(Date.now() - 10 * 1000)) + '<br/><br/>';
output.innerHTML += fromNow(new Date(Date.now() - aMinute * 8000)) + '<br/><br/>';
output.innerHTML += fromNow(new Date(Date.now() - anHour * 3000)) + '<br/><br/>';
output.innerHTML += fromNow(new Date(Date.now() - aDay * 1000)) + '<br/><br/>';
output.innerHTML += fromNow(new Date(Date.now() - aWeek * 2000)) + '<br/><br/>';
output.innerHTML += fromNow(new Date(Date.now() - aMonth * 4000)) + '<br/><br/>';
output.innerHTML += fromNow(new Date(Date.now() - aYear * 1000)) + '<br/><br/>';

Demo: https://from-now.netlify.app/