// ubicamos elementos dentro del DOM
const nav = document.querySelector('header nav');
const menu = document.querySelector('#menu');

menu.addEventListener(
        'click',
        function(){
            nav.classList.toggle('desplegado');
        }
);