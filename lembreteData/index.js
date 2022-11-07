function getDiaSemanatexto(diaSemena) {
    let diaDaSemanaTxt;//só exist na funçao
  switch (diaSemana) {
    case 0:
      diaDaSemanaTxt = "Domingo";
      return diaDaSemanaTxt
    case 1:
      diaDaSemanaTxt = "Segunda";
      return diaDaSemanaTxt
    case 2:
      diaDaSemanaTxt = "terça";
      return diaDaSemanaTxt
    case 3:
      diaDaSemanaTxt = "quarta";
      return diaDaSemanaTxt
    case 4:
      diaDaSemanaTxt = "quinta";
      return diaDaSemanaTxt
    case 5:
      diaDaSemanaTxt = "sexta";
      return diaDaSemanaTxt
    case 6:
      diaDaSemanaTxt = "sabado";
      return diaDaSemanaTxt
  }
}

const data = new Date();
const diaSemana = data.getDay();
const diaDaSemanaTxt = getDiaSemanatexto(diaSemana)
console.log(diaSemana, diaDaSemanaTxt);

const h1 = document.querySelector(".container h1");
h1.innerHTML = "so pra ve";
