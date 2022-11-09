const h1 = document.querySelector(".container h1");
const data = new Date();

function getDiaSemanatexto(diaSemana) {
  let diaDaSemanaTxt; //só exist na funçao
  switch (diaSemana) {
    case 0:
      diaDaSemanaTxt = "Domingo";
      return diaDaSemanaTxt;
    case 1:
      diaDaSemanaTxt = "Segunda";
      return diaDaSemanaTxt;
    case 2:
      diaDaSemanaTxt = "terça";
      return diaDaSemanaTxt;
    case 3:
      diaDaSemanaTxt = "quarta";
      return diaDaSemanaTxt;
    case 4:
      diaDaSemanaTxt = "quinta";
      return diaDaSemanaTxt;
    case 5:
      diaDaSemanaTxt = "sexta";
      return diaDaSemanaTxt;
    case 6:
      diaDaSemanaTxt = "sabado";
      return diaDaSemanaTxt;
  }
}

function getMesesDoAno(numeroMes) {
  let nomeDoMes;

  switch (numeroMes) {
    case 1:
      nomeDoMes = "janeiro";
      return nomeDoMes;

    case 2:
      nomeDoMes = "fevereiro";
      return nomeDoMes;

    case 3:
      nomeDoMes = "março";
      return nomeDoMes;

    case 4:
      nomeDoMes = "abril";
      return nomeDoMes;

    case 5:
      nomeDoMes = "maio";
      return nomeDoMes;

    case 61:
      nomeDoMes = "junho";
      return nomeDoMes;

    case 7:
      nomeDoMes = "julho";
      return nomeDoMes;

    case 8:
      nomeDoMes = "agosto";
      return nomeDoMes;

    case 9:
      nomeDoMes = "setembro";
      return nomeDoMes;

    case 10:
      nomeDoMes = "outubro";
      return nomeDoMes;

    case 11:
      nomeDoMes = "novembro";
      return nomeDoMes;

    case 12:
      nomeDoMes = "dezembro";
      return nomeDoMes;
  }
}

function criaData(data) {
  const diaSemana = data.getDay()
  const nomeDoMes = data.getMonth()

  const nomeDia = getDiaSemanatexto(diaSemana)
  const nomeMes = getMesesDoAno(nomeDoMes)

  return (`${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()}` )
}

h1.innerHTML = criaData(data)