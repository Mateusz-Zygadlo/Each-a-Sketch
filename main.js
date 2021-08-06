let sketch = document.querySelector('.sketch');
let htmlRangeSlider = document.querySelector('.slider');
let score = document.querySelector('.score');
let k = htmlRangeSlider.value;


htmlRangeSlider.addEventListener('change', () => {
    k = htmlRangeSlider.value;
    score.textContent = k;
})

function createDivs(n){
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            let div1 = document.createElement('div');
            sketch.appendChild(div1);
        }
    }
}
createDivs(5);

sketch.style.gridTemplateColumns = `repeat(${k}, 1fr)`;

let div = document.querySelectorAll('div');
let count = 1;

function deleteDiv(){
    div.forEach(item => {
        item.remove();
    })
}

function setId(){
    div.forEach(item => {
        item.dataset.id = count;
        count++;
    })
}
setId();

let itemId;
let bgColor = 'blue';

function getId(){
    div.forEach((item) => {
        item.addEventListener('mousemove', (e) => {
            itemId = e;
            changeBackground();
            count++;
        })
    })
}
getId();

function changeBackground(){
    let bg = itemId.target;
    bg.style.backgroundColor = bgColor;
}
let input = document.querySelector('input');
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