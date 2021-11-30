'use strict';

const backgroundImg = document.querySelector('.js-background');

function background() {
    const bg = [
        'https://live.staticflickr.com/65535/51591456521_08d2053421_k.jpg',
        'https://live.staticflickr.com/1647/25882970004_b5bbed15fc_k.jpg',
        'https://live.staticflickr.com/65535/51630395178_bc42132bbf_h.jpg',
        'https://live.staticflickr.com/65535/51709922156_e11ec9b0d5_4k.jpg',
        'https://live.staticflickr.com/65535/51628944483_fd5469b4aa_k.jpg',
        'https://live.staticflickr.com/65535/51654618313_6da46ca69a_k.jpg',
        'https://live.staticflickr.com/65535/51625321315_f0fef92343_k.jpg',
        'https://live.staticflickr.com/65535/51620547363_8a9054961e_k.jpg',
        'https://live.staticflickr.com/65535/51338462438_6801a04ce9_k.jpg',
        'https://live.staticflickr.com/65535/49329061008_cf8ea80d4f_k.jpg',
    ]
    const randomNumber = Math.ceil(Math.random() * bg.length)
    console.log(randomNumber);
    const randomBg = bg.slice(randomNumber - 1, randomNumber);
    const bgImage = randomBg[0];
    console.log(bgImage);
    backgroundImg.setAttribute('src', `${bgImage}`);

};
background();