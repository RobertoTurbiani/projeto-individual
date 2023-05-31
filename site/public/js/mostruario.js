const imgs = document.getElementById("mostruario");
const img = document.querySelectorAll("#mostruario img");

var posicao = 0;

function carrossel() {
    posicao++;

    if (posicao > img.length - 1) {
        posicao = 0;
    }

    imgs.style.transform = `translateX(${-posicao * 200}px)`;
}

setInterval(carrossel, 2000);