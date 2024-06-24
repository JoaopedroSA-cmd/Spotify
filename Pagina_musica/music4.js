
const botaoEsquerda4 = document.getElementById("controleEsquerdo4");
const botaoDireita4 = document.getElementById("controleDireito4");
const elemento4 = document.querySelector(".music_ordem4");
let intervalo4;

let posicao4 = 0; // posição inicial
const velocidade4 = 25; // pixels por intervalo

function moverEsquerda4() {
  clearInterval(intervalo4);
  intervalo4 = setInterval(() => {
    posicao4 -= velocidade4;
    if (posicao4 < -elemento4.offsetWidth) { // se o elemento saiu do limite esquerdo
      posicao4 = window.innerWidth; // move o elemento para o limite direito
    }
    elemento4.style.left = posicao4 + "px";
  }, 20);
}

function moverDireita4() {
  clearInterval(intervalo4);
  intervalo4 = setInterval(() => {
    posicao4 += velocidade4;
    if (posicao4 > window.innerWidth) { // se o elemento saiu do limite direito
      posicao4 = -elemento4.offsetWidth; // move o elemento para o limite esquerdo
    }
    elemento4.style.left = posicao4 + "px";
  }, 20);

  
}

function pararMovimento4() {
  clearInterval(intervalo4);
}

botaoEsquerda4.addEventListener("mousedown", moverEsquerda4);
botaoEsquerda4.addEventListener("mouseup", pararMovimento4);
botaoDireita4.addEventListener("mousedown", moverDireita4);
botaoDireita4.addEventListener("mouseup", pararMovimento4);

