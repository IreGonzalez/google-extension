'use strict';

const setLocalStorage = () => {
    const inputName = document.querySelector('.js-inputName');
    const userName = inputName.value;
    localStorage.setItem('name', JSON.stringify(userName));
};

const getLocalStorage = () => {
    const nameHTML = document.querySelector('.js-name');
    const userInfo = localStorage.getItem('name');
    if (userInfo !== null) {
        nameHTML.innerHTML = JSON.parse(userInfo);
    }
}
getLocalStorage();