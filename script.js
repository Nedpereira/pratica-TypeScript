const pausar = document.querySelector('.pausar');
const iniciar = document.querySelector('.iniciar');
const zerar = document.querySelector('.zerar');
const relogio = document.querySelector('.relogio');

let segundos = 0;
let time;

function iniciaRelogio(){
    time = setInterval(function(){
        segundos ++;
        relogio.innerHTML = criarSegundos(segundos);
    }, 50)
}

function criarSegundos(segundos){
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    })
}

iniciar.addEventListener('click', function(e){
    relogio.classList.remove('pausado');
    clearInterval(time);
    iniciaRelogio()
})

pausar.addEventListener('click', function(e){
    clearInterval(time);
    relogio.classList.add('pausado')
})

zerar.addEventListener('click', function(e){
    clearInterval(time);
    relogio.innerHTML = '00:00:00'
    segundos = 0;
})