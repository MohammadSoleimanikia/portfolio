const burger = document.querySelector('#burger');
const menu=document.querySelector('#menu');
const page=document.querySelector('#page');
burger.addEventListener('click',()=>{
    if (menu.classList.contains('-left-96')){
        menu.classList.remove('-left-96');
        menu.classList.add('left-0');        
    }
    else{
        menu.classList.add('-left-96');
        menu.classList.remove('left-0');
    }
});

const content=document.querySelector('.content');

content.addEventListener('pointerenter',()=>{
content.classList.add('showContent')
});

content.addEventListener('pointerleave',()=>{
content.classList.remove('showContent')
});
