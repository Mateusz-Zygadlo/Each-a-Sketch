let sketch = document.querySelector('.sketch');
let htmlRangeSlider = document.querySelector('.slider');
let score = document.querySelector('.score');
let k = htmlRangeSlider.value;


htmlRangeSlider.addEventListener('change', () => {
    k = htmlRangeSlider.value;
    score.textContent = k;
    sketch.style.gridTemplateColumns = `repeat(${k}, 1fr)`;
    deleteAllDiv();
    createDivs(k);
})

function createDivs(){
    for(let i = 0; i < 16; i++){
        for(let j = 0; j < 16; j++){
            let div1 = document.createElement('div');
            sketch.appendChild(div1);
        }
    }
}
createDivs();

let div = document.querySelectorAll('div');
let count = 1;

function setId(){
    div.forEach(item => {
        item.dataset.id = count;
        count++;
    })
}
setId();

function deleteAllDiv(){
    div.forEach(item => {
        item.remove();
    })
}


let itemId;
let bgColor = 'blue';

function getId(){
    div.forEach((item) => {
        item.addEventListener('mousemove', (e) => {
            itemId = e;
            changeBackground();
            count++;
            console.log(e);
        })
    })
}
getId();

function changeBackground(){
    let bg = itemId.target;
    bg.style.backgroundColor = bgColor;
}
let input = document.querySelector('.input');
let btns = document.querySelectorAll('button');

function setButton(){
    btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            bgColor = e.target.value;
            if(bgColor == 'rgb'){
                bgColor = input.value;
            }
            if(bgColor == 'clear'){
                div.forEach(elem => {
                    elem.style.backgroundColor = 'white';
                })
            }
        })
    })
}
setButton();