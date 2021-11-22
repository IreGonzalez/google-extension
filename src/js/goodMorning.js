'use strict';

let inputName = document.querySelector('.js-inputName');
let nameHTML = document.querySelector('.js-name');
const submit = document.querySelector('.js-submit');

const handleMorning = (ev) => {
    ev.preventDefault();
    nameHTML.innerHTML = inputName.value;
}

submit.addEventListener('click', handleMorning);