const botaoEsquerda5 = document.getElementById("controleEsquerdo5");
const botaoDireita5 = document.getElementById("controleDireito5");
const elemento5 = document.querySelector(".music_ordem5");
let intervalo5;

let posicao5 = 0; // posição inicial
const velocidade5 = 25; // pixels por intervalo

function moverEsquerda5() {
  clearInterval(intervalo5);
  intervalo5 = setInterval(() => {
    posicao5 -= velocidade5;
    if (posicao5 < -elemento5.offsetWidth) { // se o elemento saiu do limite esquerdo
      posicao5 = window.innerWidth; // move o elemento para o limite direito
    }
    elemento5.style.left = posicao5 + "px";
  }, 20);
}

function moverDireita5() {
  clearInterval(intervalo5);
  intervalo5 = setInterval(() => {
    posicao5 += velocidade5;
    if (posicao5 > window.innerWidth) { // se o elemento saiu do limite direito
      posicao5 = -elemento5.offsetWidth; // move o elemento para o limite esquerdo
    }
    elemento5.style.left = posicao5 + "px";
  }, 20);

  
}

function pararMovimento5() {
  clearInterval(intervalo5);
}

botaoEsquerda5.addEventListener("mousedown", moverEsquerda5);
botaoEsquerda5.addEventListener("mouseup", pararMovimento5);
botaoDireita5.addEventListener("mousedown", moverDireita5);
botaoDireita5.addEventListener("mouseup", pararMovimento5);