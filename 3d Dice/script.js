const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const cube = document.getElementById('dice-body');

let currentClass = '';

function rotateDice(event){
    let showClass = `show-${event.target.value}`;
    if(currentClass){
        cube.classList.remove(currentClass);
    }
    cube.classList.add(showClass);
    currentClass = showClass;

    console.log('s');
}

btn1.addEventListener('click', rotateDice);
btn2.addEventListener('click', rotateDice);
btn3.addEventListener('click', rotateDice);
btn4.addEventListener('click', rotateDice);
btn5.addEventListener('click', rotateDice);
btn6.addEventListener('click', rotateDice);