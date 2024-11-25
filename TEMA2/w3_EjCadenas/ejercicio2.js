function analizarCadena(cad) {
    if (cadena === cadena.toUpperCase()) {
        console.log("La cadena está formada solo por letras mayúsculas.");
    } else if (cadena === cadena.toLowerCase()) {
        console.log("La cadena está formada solo por letras minúsculas.");
    } else {
        console.log("La cadena está formada por una mezcla de mayúsculas y minúsculas.");
    }
}


var cadena =prompt("dime una cadena");
let resultado = analizarCadena(cadena);
document.write(resultado);
