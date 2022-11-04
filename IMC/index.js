function Imc(){

    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado')

    const pessoas = [];

    function eventImc(e) {
        e.preventDefault();

            const nome = form.querySelector('.nome');
            const sobrenome = form.querySelector('.sobrenome');
            const peso = form.querySelector('.peso');
            const altura = form.querySelector('.altura');

            pessoas.push({
                nome: nome.value,
                sobrenome: sobrenome.value,
                peso: peso.value,
                altura: altura.value
                
            })

            //converte string recebida no input para numero depos calcula IMC
            const convertPeso = Number.parseFloat(peso.value)
            const convertAltura = Number.parseFloat(altura.value)
            const calculaIMC = (convertPeso / (convertAltura * convertAltura)) 
            console.log(pessoas)

            resultado.innerHTML += (`${(calculaIMC)}`);
    }
        
        form.addEventListener('submit', eventImc)
          
}

Imc()
