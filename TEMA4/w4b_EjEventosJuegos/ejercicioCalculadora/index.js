
window.onload = () => {
    let display = document.getElementById("resultado");
    let numeroDespues = "";
    let operador = ""; 
    let numeroAntes = ""; 

    // Actualiza el display con el valor actual
    function actualizarDisplay(valor) {<table>
        <tr>
            <td id="resultado" colspan="4">NO RESULST</td>
        </tr>
        <tr>
            <td id="+">+</td>
            <td id="-">-</td>
            <td id="x">x</td>
            <td id="%">%</td>
        </tr>
        <tr>
            <td id="7">7</td>
            <td id="8">8</td>
            <td id="9">9</td>
            <td id="=" rowspan="4">=</td>
        </tr>
        <tr>
            <td id="4">4</td>
            <td id="5">5</td>
            <td id="6">6</td> 
        </tr>
        <tr>
            <td id="1">1</td>
            <td id="2">2</td>
            <td id="3">3</td>
        </tr>
        <tr>
            <td id="0">0</td>
            <td id=".">.</td>
            <td id="c">c</td>
    
        </tr>
    </table>
        display.innerHTML = valor;
    }

    function ingresarNumero(num) {
        numeroDespues += num;
        actualizarDisplay(numeroDespues);
    }

    function sumar() {
        operador = "+";
        numeroAntes = numeroDespues;
        numeroDespues = "";
    }

    function restar() {
        operador = "-";
        numeroAntes = numeroDespues;
        numeroDespues = "";
    }

    function multiplicar() {
        operador = "*";
        numeroAntes = numeroDespues;
        numeroDespues = "";
    }

    function dividir() {
        operador = "/";
        numeroAntes = numeroDespues;
        numeroDespues = "";
    }

    // Realiza la operación según la funcion
    function calcular() {
        let resultado;
        let prev = parseFloat(numeroAntes);
        let curr = parseFloat(numeroDespues);

        if (operador === "+") resultado = prev + curr;
        if (operador === "-") resultado = prev - curr;
        if (operador === "*") resultado = prev * curr;
        if (operador === "/") resultado = curr !== 0 ? prev / curr : "Error";

        actualizarDisplay(resultado);
        numeroDespues = resultado.toString();
        operador = "";
    }

    // Reinicia la calculadora
    function limpiarCalculadora() {
        numeroDespues = "";
        numeroAntes = "";
        operador = "";
        actualizarDisplay("0");
    }

    // Asigna funciones a cada botón según su ID
    document.querySelectorAll("td").forEach(boton => {
        boton.addEventListener("click", () => {
            const id = boton.id;
            if (!isNaN(id)) ingresarNumero(id);
            else if (id === "+") sumar();
            else if (id === "-") restar();
            else if (id === "x") multiplicar();
            else if (id === "%") dividir();
            else if (id === "=") calcular();
            else if (id === "c") limpiarCalculadora();
        });
    });

    actualizarDisplay("0");
}
