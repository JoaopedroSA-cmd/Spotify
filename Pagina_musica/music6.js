const botaoEsquerda6 = document.getElementById("controleEsquerdo6");
const botaoDireita6 = document.getElementById("controleDireito6");
const elemento6 = document.querySelector(".music_ordem6");
let intervalo6;

let posicao6 = 0; // posição inicial
const velocidade6 = 25; // pixels por intervalo

function moverEsquerda6() {
  clearInterval(intervalo6);
  intervalo6 = setInterval(() => {
    posicao6 -= velocidade6;
    if (posicao6 < -elemento6.offsetWidth) { // se o elemento saiu do limite esquerdo
      posicao6 = window.innerWidth; // move o elemento para o limite direito
    }
    elemento6.style.left = posicao6 + "px";
  }, 20);
}

function moverDireita6() {
  clearInterval(intervalo6);
  intervalo6 = setInterval(() => {
    posicao6 += velocidade6;
    if (posicao6 > window.innerWidth) { // se o elemento saiu do limite direito
      posicao6 = -elemento6.offsetWidth; // move o elemento para o limite esquerdo
    }
    elemento6.style.left = posicao6 + "px";
  }, 20);
}

function pararMovimento6() {
  clearInterval(intervalo6);
}

botaoEsquerda6.addEventListener("mousedown", moverEsquerda6);
botaoEsquerda6.addEventListener("mouseup", pararMovimento6);
botaoDireita6.addEventListener("mousedown", moverDireita6);
botaoDireita6.addEventListener("mouseup", pararMovimento6);