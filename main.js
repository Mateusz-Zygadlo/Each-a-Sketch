const grid = document.querySelector('.grid');
const score = document.querySelector('.score');
const input = document.querySelector('.input');
let count = 1;

let divs;
let itemId;
let bgColor;
let rgbRandom;

function createDiv(n){
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            let divOne = document.createElement('div');
            divOne.classList.add('b');
            grid.appendChild(divOne);
        }
    }
    addId();
    divs = document.getElementsByClassName('b');
}
function addId(){
    let div = document.querySelectorAll('.b');
    div.forEach(item => {
        item.dataset.id = count;
        count++;
    })
    count = 1;
}
function click(){
    [...divs].forEach(elem => {
        elem.addEventListener('mouseover', (e) => {
            itemId = e.target;
            changeColor();
            rgbRandom = randomRgb();
        })
    })
}
function changeColor(){
    bg = itemId;
    bg.style.backgroundColor = bgColor;
}

function randomRgb(){
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

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
                clear();
            }else if(bgColor == 'rgb'){
                bgColor = rgbRandom;
            }
        })
    })
}
setButton();

input.addEventListener('change', () => {
    grid.textContent = '';
    grid.classList.remove('t');
    grid.style.gridTemplateColumns = `repeat(${input.value}, 1fr)`;
    score.textContent = input.value;
    createDiv(input.value);
    click();
})