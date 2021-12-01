'use strict';

const submit = document.querySelector('.js-submit');

const handleMorning = (event) => {
    const inputName = document.querySelector('.js-inputName');
    const nameHTML = document.querySelector('.js-name');
    event.preventefault();
    nameHTML.innerHTML = inputName.value;
    console.log(inputName.value);
};

submit.addEventListener('click', handleMorning);