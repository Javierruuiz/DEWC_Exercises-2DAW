function contarPalabras(cadena) {
    let palabras = cadena.trim()//.split(/\s+/);
    if (palabras[0] === "") {
        return 0;
    }
    return palabras.length;
}
var palabras =prompt("dime una cadena");
let resultado = contarPalabras(palabras);
document.write(resultado);