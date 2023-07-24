function tocaSom(idElemendoAudio) {
    const elemento = document.querySelector(idElemendoAudio);

    if(elemento && elemento.localName === 'audio'){
        elemento.play();
    } else {
        console.log('Elemento não encontrado!');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let i=0; i < listaDeTeclas.length; i++) {

    const tecla = listaDeTeclas[i];
    const nomeTecla = tecla.classList[1];
    const idAudio = `#som_${nomeTecla}`;

    tecla.onclick = function() {
        tocaSom(idAudio)
    }
    tecla.onkeydown = function(evento) {
        if(evento.code === 'Space' || evento.code === 'Enter' || evento.code === 'NumpadEnter') {
            tecla.classList.add('ativa');
        }
    }

    

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }
}
