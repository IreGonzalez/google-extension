'use strict';

const printSentences = (day, data) => {
    const author = document.querySelector('.js-author');
    const phrase = document.querySelector('.js-phrase');
    const dataNumber = parseInt(data.length - 1);
    console.log(dataNumber);
    console.log(data);
    if (day <= data.length) {
        const text = data.find(sentences => parseInt(sentences.id) === day);
        console.log(text);
        author.innerHTML = text.name;
        phrase.innerHTML = text.text;
    } else if (day > data.length) {
        const text = data.find(sentences => parseInt(sentences.id) === day - dataNumber);
        author.innerHTML = text.name;
        phrase.innerHTML = text.text;
    }
}

const dayNumber = (data) => {
    const date = new Date();
    const day = date.getUTCDate();
    printSentences(day, data)
}

function sentencesFetch() {
    fetch('./api/sentences.json')
        .then(response => response.json())
        .then(data => {
            dayNumber(data);
        });
};
sentencesFetch();
