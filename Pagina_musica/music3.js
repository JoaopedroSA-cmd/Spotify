
const botaoEsquerda3 = document.getElementById("controleEsquerdo3");
const botaoDireita3 = document.getElementById("controleDireito3");
const elemento3 = document.querySelector(".music_ordem3");
let intervalo3;

let posicao3 = 0; // posição inicial
const velocidade3 = 25; // pixels por intervalo

function moverEsquerda3() {
  clearInterval(intervalo3);
  intervalo3 = setInterval(() => {
    posicao3 -= velocidade3;
    if (posicao3 < -elemento3.offsetWidth) { // se o elemento saiu do limite esquerdo
      posicao3 = window.innerWidth; // move o elemento para o limite direito
    }
    elemento3.style.left = posicao3 + "px";
  }, 20);
}

function moverDireita3() {
  clearInterval(intervalo3);
  intervalo3 = setInterval(() => {
    posicao3 += velocidade3;
    if (posicao3 > window.innerWidth) { // se o elemento saiu do limite direito
      posicao3 = -elemento3.offsetWidth; // move o elemento para o limite esquerdo
    }
    elemento3.style.left = posicao3 + "px";
  }, 20);

  
}

function pararMovimento3() {
  clearInterval(intervalo3);
}

botaoEsquerda3.addEventListener("mousedown", moverEsquerda3);
botaoEsquerda3.addEventListener("mouseup", pararMovimento3);
botaoDireita3.addEventListener("mousedown", moverDireita3);
botaoDireita3.addEventListener("mouseup", pararMovimento3);

