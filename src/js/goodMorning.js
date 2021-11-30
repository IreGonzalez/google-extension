'use strict';

const submit = document.querySelector('.js-submit');

const handleMorning = (ev) => {
    const inputName = document.querySelector('.js-inputName');
    const nameHTML = document.querySelector('.js-name');
    ev.preventDefault();
    nameHTML.innerHTML = inputName.value;
}

submit.addEventListener('click', handleMorning);