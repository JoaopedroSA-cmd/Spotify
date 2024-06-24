const botaoEsquerda7 = document.getElementById("controleEsquerdo7");
const botaoDireita7 = document.getElementById("controleDireito7");
const elemento7 = document.querySelector(".music_ordem7");
let intervalo7;

let posicao7 = 0; // posição inicial
const velocidade7 = 25; // pixels por intervalo

function moverEsquerda7() {
  clearInterval(intervalo7);
  intervalo7 = setInterval(() => {
    posicao7 -= velocidade7;
    if (posicao7 < -elemento7.offsetWidth) { // se o elemento saiu do limite esquerdo
      posicao7 = window.innerWidth; // move o elemento para o limite direito
    }
    elemento7.style.left = posicao7 + "px";
  }, 20);
}

function moverDireita7() {
  clearInterval(intervalo7);
  intervalo7 = setInterval(() => {
    posicao7 += velocidade7;
    if (posicao7 > window.innerWidth) { // se o elemento saiu do limite direito
      posicao7 = -elemento7.offsetWidth; // move o elemento para o limite esquerdo
    }
    elemento7.style.left = posicao7 + "px";
  }, 20);
}

function pararMovimento7() {
  clearInterval(intervalo7);
}

botaoEsquerda7.addEventListener("mousedown", moverEsquerda7);
botaoEsquerda7.addEventListener("mouseup", pararMovimento7);
botaoDireita7.addEventListener("mousedown", moverDireita7);
botaoDireita7.addEventListener("mouseup", pararMovimento7);