'use strict';

const inputName = document.querySelector('.js-inputName');
const userName = inputName.value;
console.log(userName);
localStorage.setItem('name', `${userName}`);
const getUserName = localStorage.getItem('name');