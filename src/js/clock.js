'use strict'

let hour = document.querySelector('.js-hour');
let minutes = document.querySelector('.js-minutes');
let seconds = document.querySelector('.js-seconds');

const showTime = () => {
    let fecha = new Date()
    minutes.innerHTML = fecha.getMinutes();
    hour.innerHTML = fecha.getHours();
    console.log(fecha);
}

window.addEventListener('load', showTime)