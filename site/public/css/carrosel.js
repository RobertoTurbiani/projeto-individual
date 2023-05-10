const imgs = document.getElementById("imagens");
const img = document.querySelectorAll("#imagens img");

var posicao = 0;

function carrosel() {
    posicao++;

    if (posicao > img.length - 1) {
        posicao = 0;
    }

    imgs.style.transform = `translateX(${ - posicao * 500}px)`;
}

setInterval(carrosel, 2000);