'use strict';

const submit = document.querySelector('.js-submit');

const handleMorning = (ev) => {
    ev.preventDefault();
    setLocalStorage();
    getLocalStorage();
}

submit.addEventListener('click', handleMorning);