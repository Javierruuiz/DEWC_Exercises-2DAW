const palabras = {
    ciudades: ["madrid", "paris", "londres", "roma", "berlin"],
};

let palabraElegida = "";
let palabraGuiones = [];
let vidas = 10;
let categoriaSeleccionada = "ciudades";


const alfabetoDiv = document.getElementById("alfabeto");
const palabraDiv = document.getElementById("palabra");
const vidasSpan = document.getElementById("vidas-valor");
const pistaDiv = document.getElementById("pista");

const letras = "abcdefghijklmnopqrstuvwxyz".split("");
letras.forEach((letra) => {
    const boton = document.createElement("button");
    boton.textContent = letra;
    boton.addEventListener("click", () => seleccionarLetra(letra, boton));
    alfabetoDiv.appendChild(boton);
});

// Elegir palabra al azar
function elegirPalabra() {
    const palabrasCategoria = palabras[categoriaSeleccionada];
    palabraElegida = palabrasCategoria[Math.floor(Math.random() * palabrasCategoria.length)];
    palabraGuiones = Array(palabraElegida.length).fill("_");
    mostrarPalabra();
}

// Mostrar palabra como guiones
function mostrarPalabra() {
    palabraDiv.textContent = palabraGuiones.join(" ");
}

// Seleccionar letra
function seleccionarLetra(letra, boton) {
    boton.disabled = true;
    if (palabraElegida.includes(letra)) {
        for (let i = 0; i < palabraElegida.length; i++) {
            if (palabraElegida[i] === letra) {
                palabraGuiones[i] = letra;
            }
        }
    } else {
        vidas--;
        actualizarVidas();
    }
    mostrarPalabra();
    verificarEstadoJuego();
}

// Actualizar vidas
function actualizarVidas() {
    vidasSpan.textContent = vidas;
}

// Verificar estado del juego
function verificarEstadoJuego() {
    if (vidas <= 0) {
        alert("¡Has perdido! La palabra era: " + palabraElegida);
        reiniciarJuego();
    } else if (!palabraGuiones.includes("_")) {
        alert("¡Felicidades, ganaste!");
        reiniciarJuego();
    }
}

// Mostrar pista
document.getElementById("boton-pista").addEventListener("click", () => {
    if (categoriaSeleccionada === "ciudades") {
        pistaDiv.textContent = "Es una ciudad famosa en Europa.";
    }
});

// Reiniciar juego
function reiniciarJuego() {
    vidas = 10;
    palabraElegida = "";
    palabraGuiones = [];
    pistaDiv.textContent = "";
    alfabetoDiv.querySelectorAll("button").forEach((boton) => (boton.disabled = false));
    elegirPalabra();
    actualizarVidas();
}
elegirPalabra();
