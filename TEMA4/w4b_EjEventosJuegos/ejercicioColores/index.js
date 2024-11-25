window.onload = () => {
    document.getElementById("inicio").addEventListener("click", () => {
        iniciaPartida();
    });
    document.getElementById("hard").addEventListener("click", () => {
        iniciaPartida();
    });

    // Capturar evento click sobre cada div
    let listaDivs = document.getElementsByClassName("cuadrado");
    for (let cuadrado of listaDivs) {
        cuadrado.addEventListener("click", colorCorecto);
         // Agregar el evento a cada div
    }
};

function colorCorecto(e) {
    if (e.target.style.backgroundColor === document.getElementById("c_Correcto").innerText) {
        document.getElementById("estado").innerText=("acertado");
        iniciaPartida();
    
    } else {
        document.getElementById("estado").innerText=("fallo");
        e.target.style.backgroundColor = "black";
        //darle color a los fallados
    }
}

function iniciaPartida() {
    // Pintar de color aleatorio cada cuadrado
    let listaDivs = document.getElementsByClassName("cuadrado");
    for (let cuadrado of listaDivs) {
        cuadrado.style.backgroundColor = colorAleatorio();
    }
    
    
    // Seleccionar un div al azar como la solución
    let solucion = Math.floor(Math.random() * listaDivs.length);
    document.getElementById("c_Correcto").innerText = listaDivs[solucion].style.backgroundColor;
}

function colorAleatorio() {
    let arrayColor = [];
    for (let i = 0; i < 3; i++) {
        arrayColor[i] = Math.trunc(Math.random() * 255);
    }
    let color = `rgb(${arrayColor.join(",")})`;
    return color;
}

