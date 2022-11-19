const inputTarefa = document.querySelector('.input-nova-tarefa')
const buttonTarefa = document.querySelector('.button-add-tarefa')
const tarefas = document.querySelector('.tarefas')

//funçao que cria li
function criaLi(){
    const li = document.createElement('li')
    return li;
}

//função que cria tarefa
function criaTarefa(inputText) {
    const li = criaLi()
    li.innerText = inputText 
    tarefas.appendChild(li) 
    limpaInput()  
    criarBotaoApagar(li)
    salvarTarefas()
}

//funçao que limpa input
function limpaInput(){
    inputTarefa.value = ''
    inputTarefa.focus()
}

//funçao para apagar tarefa criada
function criarBotaoApagar(li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button')
    botaoApagar.innerText =  'Apagar'
    botaoApagar.setAttribute('class', 'apagar')
    li.appendChild(botaoApagar)
}

buttonTarefa.addEventListener('click', function(){
    if(!inputTarefa)return;

    criaTarefa(inputTarefa.value)
})

//função que adiciona tarefa ao apertar enter
inputTarefa.addEventListener('keypress', function (e) {
    if(e.keyCode === 13){
        if(!inputTarefa)return;
        criaTarefa(inputTarefa.value)
    }
})

//pegar o evento de click
document.addEventListener( 'click', function(e){
    const el = e.target

    if(el.classList.contains('apagar')){
        console.log('apagar clicado')
        el.parentElement.remove()
        salvarTarefas()
    }
})

function salvarTarefas() {
    const liTarefa = tarefas.querySelectorAll('li')
    const listaTarefas = []

    for (let tarefa of liTarefa){
        let tarefaTexto = tarefa.innerText
        tarefaTexto = tarefaTexto.replace('Apagar', '')
        listaTarefas.push(tarefaTexto)
    }

    const tarefasJSON = JSON.stringify(listaTarefas)
    localStorage.setItem('tarefas', tarefasJSON)
}

function addTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas')
    const listaTarefas = JSON.parse(tarefas)
    for(let tarefa of listaTarefas){
        criaTarefa(tarefa)
    }
}

addTarefasSalvas()