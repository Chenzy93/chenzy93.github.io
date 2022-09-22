let image = document.querySelector('img');
document.querySelector('img').onclick = function() {
    let src = image.getAttribute('src');
    if(src === 'images/code.webp') {
        image.setAttribute('src', 'images/code2.webp');
    } else {
        image.setAttribute('src', 'images/code.webp');
    }
}

let myHeading = document.querySelector('h1');
let myButton = document.querySelector('button');

function setHeading() {
    let newHeading = prompt('Please input Heading: ');
    if(!newHeading) {
        setHeading();
    } else {
        localStorage.setItem('head', newHeading);
        myHeading.textContent = 'MDN, '+newHeading;
    }
}

if(!localStorage.getItem('head')) {
    setHeading();
} else {
    let storedHeading = localStorage.getItem('head');
    myHeading.textContent = 'MDN, '+storedHeading;
}

document.querySelector('button').onclick = function() {
    setHeading();
}