//captura evento do formularip
const form = document.querySelector('#form-graus')

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        //pega input
        const inputGrausCelsius = document.querySelector('#grausCelsius');

        const graus = Number(inputGrausCelsius.value) //valor do input

        //
        const f =  (graus *  (9/5)) + 32;
        
        //se graus nao for valido
        if(!graus) {
            setGraus(`Temperatunra invalida`)
        }else {
            setGraus(`Temperatura valida ${f}`)
        }
    });

    function setGraus(msg) {
        const resul =  document.querySelector('.resultado')
        resul.innerHTML = msg
    }
