let sketch = document.querySelector('.sketch');

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

let itemId;

function getId(){
    div.forEach((item) => {
        item.addEventListener('mousemove', (e) => {
            itemId = e;
            changeBackground();
        })
    })
}
getId();

function changeBackground(){
    let bg = itemId.target;
    bg.style.backgroundColor = "black";
}
