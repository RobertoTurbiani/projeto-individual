const imgs = document.getElementById("imagens");
const img = document.querySelectorAll("#imagens img");

var posicao = 0;

function carrossel() {
    posicao++;

    if (posicao > img.length - 1) {
        posicao = 0;
    }

    imgs.style.transform = `translateX(${-posicao * 900}px)`;
}

setInterval(carrossel, 1800);