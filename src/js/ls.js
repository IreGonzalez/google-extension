'use strict';
const inputName = document.querySelector('.js-inputName');
const reset = document.querySelector('.js-reset');

const setLocalStorage = () => {
    const userName = inputName.value;
    localStorage.setItem('name', JSON.stringify(userName));
};

const getLocalStorage = () => {
    const nameHTML = document.querySelector('.js-name');
    const userInfo = localStorage.getItem('name');
    if (userInfo !== null) {
        nameHTML.innerHTML = JSON.parse(userInfo);
        submit.classList.add('hidden');
        inputName.classList.add('hidden');
        reset.classList.remove('hidden')
    }
    else {
        submit.classList.remove('hidden');
        inputName.classList.remove('hidden');
        reset.classList.add('hidden')
    }
}

const resetLocalstorage = (ev) => {
    ev.preventDefault();
    localStorage.clear();
    getLocalStorage();

}

getLocalStorage();
reset.addEventListener('click', resetLocalstorage)