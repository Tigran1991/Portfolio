"use strict";

const greetingElement = document.querySelector('.greeting');
const dashElement = document.querySelector(".dash");

const greetingText = 'Hi, I am web developer !';

const greetingTextCharacters = greetingText.split("");

const percentageElem = document.querySelector(".percentage");
const percentageShapeElem = document.querySelector(".percentage-shape");

const hide = true;

let interval = setInterval(() => {
    if(hide)
        dashElement.classList.toggle("hide");
    else
        dashElement.classList.toggle("show");
}, 1000);

function addCharactersToGreetingString(i) {
    setTimeout(() => {
        greetingElement.innerHTML += greetingText[i];
    }, i * 200);
}

const writeGreetingText = () => {
    for (let i = 0; i < greetingTextCharacters.length; i++) {
        addCharactersToGreetingString(i);
    }
};

setTimeout(() => {
    dashElement.classList.remove("hide");
    clearInterval(interval);
    writeGreetingText();
}, 3000);

// setTimeout(() => {
//     dashElement.remove();
// }, 10000)

window.addEventListener("scroll", () => {
    console.log(window.scrollY);
    const height = 1449;
    const sizeOfYScroll = window.scrollY;

    const percent = sizeOfYScroll * 100 / height;

    percentageShapeElem.style.width = percent + "%";
})



