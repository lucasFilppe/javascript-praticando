const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')


function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    })
}
//console.log(criaHoraDosSegundos(10))

let segundos = 0;
let timer;
function iniciaRelogio(){
        timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos)
    }, 1000)
}

iniciar.addEventListener('click', function(event) {
    clearInterval(timer)
    iniciaRelogio()
})

pausar.addEventListener('click', function(event) {
    clearInterval(timer)//para o inrerval
})

zerar.addEventListener('click', function(event) {
    clearInterval(timer)
    relogio.innerHTML = '00:00:00'
    segundos = 0
})