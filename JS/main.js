//const carrusel = document.querySelector(".carrusel-items");
//
//let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;
//let intervalo = null;
//let step = 1;
//const start = () => {
//  intervalo = setInterval(function () {
//    carrusel.scrollLeft = carrusel.scrollLeft + 200;
//    if (carrusel.scrollLeft === maxScrollLeft) {
//      step = step * -1;
//    } else if (carrusel.scrollLeft === 0) {
//      step = step * -1;
//    }
//  }, 10);
//};

//const stop = () => {
//  clearInterval();
//};

//carrusel.addEventListener("mouseover", () => {
//  stop();
//});

//carrusel.addEventListener("mouseout", () => {
//  start();
//});
//
//start();


window.onload = function () {
    // Variables
    const IMAGENES = [
        '../img/arriba.jpg',
        '../img/ca.jpg',
        '../img/ima.jpg',
        '../img/imagen.jpg',
        '../img/Manzana.jpg',
      '../img/rru.jpg',
'../img/ssel.jpg',
'../img/perro1.jpg',
'../img/perro2.jpg',
    ];
    const TIEMPO_INTERVALO_MILESIMAS_SEG = 1000;
    let posicionActual = 0;
    let $botonRetroceder = document.querySelector('#retroceder');
    let $botonAvanzar = document.querySelector('#avanzar');
    let $imagen = document.querySelector('#imagen');
    let $botonPlay = document.querySelector('#play');
    let $botonStop = document.querySelector('#stop');
    let intervalo;

    // Funciones

    /**
     * Funcion que cambia la foto en la siguiente posicion
     */
    function pasarFoto() {
        if(posicionActual >= IMAGENES.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        renderizarImagen();
    }

    /**
     * Funcion que cambia la foto en la anterior posicion
     */
    function retrocederFoto() {
        if(posicionActual <= 0) {
            posicionActual = IMAGENES.length - 1;
        } else {
            posicionActual--;
        }
        renderizarImagen();
    }

    /**
     * Funcion que actualiza la imagen de imagen dependiendo de posicionActual
     */
    function renderizarImagen () {
        $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
    }

    /**
     * Activa el autoplay de la imagen
     */
    function playIntervalo() {
        intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);
        // Desactivamos los botones de control
        $botonAvanzar.setAttribute('disabled', true);
        $botonRetroceder.setAttribute('disabled', true);
        $botonPlay.setAttribute('disabled', true);
        $botonStop.removeAttribute('disabled');

    }

    /**
     * Para el autoplay de la imagen
     */
    function stopIntervalo() {
        clearInterval(intervalo);
        // Activamos los botones de control
        $botonAvanzar.removeAttribute('disabled');
        $botonRetroceder.removeAttribute('disabled');
        $botonPlay.removeAttribute('disabled');
        $botonStop.setAttribute('disabled', true);
    }

    // Eventos
    $botonAvanzar.addEventListener('click', pasarFoto);
    $botonRetroceder.addEventListener('click', retrocederFoto);
    $botonPlay.addEventListener('click', playIntervalo);
    $botonStop.addEventListener('click', stopIntervalo);
    // Iniciar
    renderizarImagen();
}
