'use strict';

const button = document.querySelector('div.button');
const btn = document.querySelector('.button_run');
const btnNone = document.querySelector('.none')

// btnNone.style.position = "absolute"

const click = () => {

    alert("Ню ти муська!");
    alert('Назми ня дя!')

}

btnNone.addEventListener('click', click)

const run = () => { 
    btn.style.position = "absolute"
    btn.style.left = `${Math.random() * 80}%`
    btn.style.top = `${Math.random() * 80}%`
}

const clickRun = () => {
    alert('Сёёёё будемь ебааааася!')
    alert('На этём игла законтиясь')
}

btn.addEventListener('mousemove', run)
btn.addEventListener('click', clickRun)