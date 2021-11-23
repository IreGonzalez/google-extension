'use strict';

const backgroundImg = document.querySelector('.js-background');

function background() {
    const bg = [
        'Bg-1.jpg',
        'Bg-2.jpg',
        'Bg-3.jpg',
        'Bg-4.jpg',
        'Bg-5.jpg',
        'Bg-6.jpg',
        'Bg-7.jpg',
        'Bg-8.jpg',
        'Bg-9.jpg',
        'Bg-10.jpg',
        'Bg-11.jpg'
    ]
    const randomNumber = Math.ceil(Math.random() * bg.length)
    console.log(randomNumber);
    const randomBg = bg.slice(randomNumber - 1, randomNumber);
    const bgImage = randomBg[0];
    console.log(bgImage);
    backgroundImg.setAttribute('src', `./assets/images/${bgImage}`);

};
background();