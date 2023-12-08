
const contadorSpan = document.getElementById('contador');
const BotaoAumentar = document.getElementById('aumentar');
const BotaoDiminuir = document.getElementById('diminuir');
const BotaoZerar = document.getElementById('zerar');

let contador = 0;

function aumentarContador() {
    contador++;
    atualizarContador();
}
function diminuirContador() {
    if (contador > 0) {
        contador--;
    }
    atualizarContador();
}
function zerarContador() {
    contador = 0;
    atualizarContador();
}
function atualizarContador() {
    contadorSpan.textContent = contador;
}
BotaoAumentar.addEventListener('click', aumentarContador);
BotaoDiminuir.addEventListener('click', diminuirContador);
BotaoZerar.addEventListener('click', zerarContador);

atualizarContador();