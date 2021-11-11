const contador = document.querySelector(".contar");
const sum = document.querySelector(".suma");
const resta = document.querySelector(".resta");
const reset = document.querySelector(".reiniciar");

let num = 0;

function sumar() {
  num++;
  contador.innerHTML = num;
}

function restar() {
  if (num === 0) {
    return true;
  } else {
    num--;
    contador.innerHTML = num;
  }
}

function resetear() {
  num = 0;
  contador.innerHTML = num;
}

sum.addEventListener("click", sumar);
resta.addEventListener("click", restar);
reset.addEventListener("click", resetear);
