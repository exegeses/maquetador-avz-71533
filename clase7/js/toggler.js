// ubicar elementos dentro del DOM
const nav = document.querySelector('#primero');
const botones = document.querySelectorAll('#primero a');
const segundo = document.querySelector('#segundo');

const btnAgregar = botones[0];
const btnQuitar = botones[1];
const btnToggler = botones[2];

btnAgregar.addEventListener(
            'click',
            function(){
                segundo.classList.add('destacado');
            }
);
btnQuitar.addEventListener(
            'click',
            function(){
                segundo.classList.remove('destacado');
            }
);
btnToggler.addEventListener(
        'click',
        function(){
            segundo.classList.toggle('destacado');
        }
);