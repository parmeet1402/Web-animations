let btn1 = document.querySelector('#btn2');
let btn4 = document.querySelector('#btn4');
let base = document.querySelector('.thecard')
btn2.addEventListener('click', function(e){
    console.log('btn working');
    e.preventDefault();
//    base.classList.add('animatethecard');
    base.style.transform="rotateY(180deg)";
});

btn4.addEventListener('click', function(e){
    console.log('btn working');
    e.preventDefault();
//    base.classList.add('animatethecard');
    base.style.transform="rotateY(0deg)";
});



if(false){
    console.log('jbj');
}
else{
    console.log('fads');
}