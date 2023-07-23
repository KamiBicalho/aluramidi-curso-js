//contador
let i = 0;

function tocaSom(idElemendoAudio) {
    document.querySelector(idElemendoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

while(i < listaDeTeclas.length) {

    const nomeTecla = listaDeTeclas[i].classList[1];
    const idAudio = `#som_${nomeTecla}`;

    listaDeTeclas[i].onclick = function() {
        tocaSom(idAudio)
    }

    i = i + 1
}