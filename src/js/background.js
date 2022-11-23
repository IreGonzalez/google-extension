'use strict';

const backgroundImg = document.querySelector('.js-background');

function background() {
    const bg = [
        './assets/images/Bg-1.jpg',
        './assets/images/Bg-2.jpg',
        './assets/images/Bg-3.jpg',
        './assets/images/Bg-4.jpg',
        './assets/images/Bg-5.jpg',
        './assets/images/Bg-6.jpg',
        './assets/images/Bg-7.jpg',
        './assets/images/Bg-8.jpg',
        './assets/images/Bg-9.jpg',
        './assets/images/Bg-10.jpg',
        './assets/images/Bg-11.jpg'
    ]
    const randomNumber = Math.ceil(Math.random() * bg.length)
    const randomBg = bg.slice(randomNumber - 1, randomNumber);
    const bgImage = randomBg[0];
    backgroundImg.setAttribute('src', `${bgImage}`);

};
background();