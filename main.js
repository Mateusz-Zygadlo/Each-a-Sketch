const grid = document.querySelector('.grid');
const score = document.querySelector('.score');
const input = document.querySelector('.input');
let count = 1;

let divs;
let itemId;
let bgColor;
let rgbRandom;
let test;

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
            rgbRandom = randomRgb();
            changeColor();
        })
    })
}
function changeColor(){
    bg = itemId;
    if(bgColor == 'rgb'){
        const red = Math.floor(Math.random() * 255);
        const green = Math.floor(Math.random() * 255);
        const blue = Math.floor(Math.random() * 255);
    
        let final = `rgb(${red}, ${green}, ${blue})`;

        bg.style.backgroundColor = final;
    }else if(bgColor == 'clear'){
        bgColor = 'white';
    }
    bg.style.backgroundColor = bgColor;
}

function randomRgb(){
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `rgb(${red}, ${green}, ${blue})`;
}
function backgroundRgb(){
    setInterval(() => {
        bgColor = rgbRandom;
    }, 1);
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
            console.log(bgColor);
            if(bgColor == 'eraser'){
                bgColor = 'white';
            }else if(bgColor == 'clear'){
                bgColor = 'white';
            }else if(bgColor == 'rgb'){
                bgColor = 'rgb';
            }else if(bgColor = 'randomColor'){
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