const btnMenu = document.querySelector('#btn-menu');
const nav = document.querySelector('header nav');

btnMenu.addEventListener(
        'click',
        ()=>{
            nav.classList.toggle('show-menu');
        }
);