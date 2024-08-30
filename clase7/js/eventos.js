/*
* ubicar elementos dentro del DOM
* */
const segundo = document.querySelector('#segundo');
const boton = document.querySelector('#boton');

/* segundo.innerText = 'texto modificado';
segundo.style.backgroundColor = '#ff0'; */



/* Vamos a pedirle que escuche que suceda un evento */
boton.addEventListener(
        'click',
        function(){
            //document.body.style.backgroundColor = 'hsl(200, 50%,50%)';
            //document.querySelector('h1').innerText = 'textro modificado';
            segundo.style.backgroundColor='hsl(40, 50%, 50%)';
        }
);