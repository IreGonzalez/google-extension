'use strict'

let hourHTML = document.querySelector('.js-hour');
let minutesHTML = document.querySelector('.js-minutes');

const showTime = () => {
    let date = new Date()
    let hour = date.getHours();
    let minutes = date.getMinutes();

    hourHTML.innerHTML = String(hour).padStart(2, "0");
    minutesHTML.innerHTML = String(minutes).padStart(2, "0");

    setTimeout(showTime, 1000);
}

showTime();