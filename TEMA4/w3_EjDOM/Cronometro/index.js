let segundos = 0;
let intervalo;
let enMarcha = false;

const iniciarBoton = document.getElementById('iniciar');
const detenerBoton = document.getElementById('detener');
const reiniciarBoton = document.getElementById('reiniciar');
const tiempoElemento = document.getElementById('tiempo');

function actualizarTiempo() {
    const minutos = Math.floor(segundos / 60);
    const segundosRestantes = segundos % 60;
    tiempoElemento.textContent = 
        `${minutos.toString().padStart(2, '0')}:${segundosRestantes.toString().padStart(2, '0')}`;
}

function iniciarCronometro() {
    if (!enMarcha) {
        enMarcha = true;
        intervalo = setInterval(() => {
            segundos++;
            actualizarTiempo();
        }, 1000);
    }
}

function detenerCronometro() {
    enMarcha = false;
    clearInterval(intervalo);
}

function reiniciarCronometro() {
    detenerCronometro();
    segundos = 0;
    actualizarTiempo();
}

iniciarBoton.addEventListener('click', iniciarCronometro);
detenerBoton.addEventListener('click', detenerCronometro);
reiniciarBoton.addEventListener('click', reiniciarCronometro);
