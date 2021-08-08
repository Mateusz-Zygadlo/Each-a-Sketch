const grid = document.querySelector('.grid');
const score = document.querySelector('.score');
const input = document.querySelector('.input');

const startPage = document.querySelector('.startPage');
const buttonStart = document.querySelector('.start');

let count = 1;

let divs;
let itemId;
let bgColor;
let rgbRandom;
let randomColor;

function createandClassDiv(n){
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            let divOne = document.createElement('div');
            divOne.classList.add('div');
            grid.appendChild(divOne);
        }
    }
    addId();
    divs = document.getElementsByClassName('div');
}
function addId(){
    let div = document.querySelectorAll('.div');
    div.forEach(item => {
        item.dataset.id = count;
        count++;
    })
    count = 1;
}
function mouseOver(){
    [...divs].forEach(elem => {
        elem.addEventListener('mouseover', (e) => {
            itemId = e.target;
            rgbRandom = randomRgb();
            changeColor();
        })
    })
}
function changeColor(){
    bg = itemId;
    if(bgColor == 'rgb'){
        randomRgb();
        bg.style.backgroundColor = randomColor;
    }else{
        bg.style.backgroundColor = bgColor;
    }
}
function randomRgb(){
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    randomColor = `rgb(${red}, ${green}, ${blue})`;
    return `rgb(${red}, ${green}, ${blue})`;
}
function clear(){
    [...divs].forEach(div => {
        div.style.backgroundColor = 'white';
    })
}
function setButton(){
    let buttons = document.getElementsByClassName('choose');

    [...buttons].forEach(btn => {
        btn.addEventListener('click', (e) => {
            bgColor = e.target.value;
            if(bgColor == 'eraser'){
                bgColor = 'white';
            }else if(bgColor == 'clear'){
                bgColor = clear();
                bgColor = 'black';
            }else if(bgColor == 'rgb'){
                bgColor = 'rgb';
            }else if(bgColor == 'randomColor'){
                bgColor = rgbRandom;
            }
        })
    })
}
setButton();

input.addEventListener('change', () => {
    grid.textContent = '';
    grid.classList.remove('gridColumn');
    grid.style.gridTemplateColumns = `repeat(${input.value}, 1fr)`;
    score.textContent = input.value;
    createandClassDiv(input.value);
    mouseOver();
})

buttonStart.addEventListener('click', () => {
    startPage.classList.toggle('popup');
    grid.style.gridTemplateColumns = `repeat(16, 1fr)`;
    score.textContent = 16;
    createandClassDiv(16);
    mouseOver();
})