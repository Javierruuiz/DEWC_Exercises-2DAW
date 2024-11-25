let numeroSecreto = parseInt(prompt("Introduce un número"));

let intento = 0; 

while (intento !== numeroSecreto) {
    intento = parseInt(prompt("Adivina el número"));
    if (intento > numeroSecreto) {
        alert("El número es más pequeño.");
    } else if (intento < numeroSecreto) {
        alert("El número es más grande.");
    } else {
        alert("Adivinaste el número.");
    }
}