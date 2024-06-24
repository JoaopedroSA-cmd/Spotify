const botaoEsquerda8 = document.getElementById("controleEsquerdo8");
const botaoDireita8 = document.getElementById("controleDireito8");
const elemento8 = document.querySelector(".music_ordem8");
let intervalo8;

let posicao8 = 0; // posição inicial
const velocidade8 = 25; // pixels por intervalo

function moverEsquerda8() {
  clearInterval(intervalo8);
  intervalo8 = setInterval(() => {
    posicao8 -= velocidade8;
    if (posicao8 < -elemento8.offsetWidth) { // se o elemento saiu do limite esquerdo
      posicao8 = window.innerWidth; // move o elemento para o limite direito
    }
    elemento8.style.left = posicao8 + "px";
  }, 20);
}

function moverDireita8() {
  clearInterval(intervalo8);
  intervalo8 = setInterval(() => {
    posicao8 += velocidade8;
    if (posicao8 > window.innerWidth) { // se o elemento saiu do limite direito
      posicao8 = -elemento8.offsetWidth; // move o elemento para o limite esquerdo
    }
    elemento8.style.left = posicao8 + "px";
  }, 20);
}

function pararMovimento8() {
  clearInterval(intervalo8);
}

botaoEsquerda8.addEventListener("mousedown", moverEsquerda8);
botaoEsquerda8.addEventListener("mouseup", pararMovimento8);
botaoDireita8.addEventListener("mousedown", moverDireita8);
botaoDireita8.addEventListener("mouseup", pararMovimento8);
