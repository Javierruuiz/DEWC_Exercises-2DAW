//edad = diferente sitio

let numero = prompt("ingrese la edad");
numero = parseInt(numero);

if(numero<=6 && numero>=11){
    document.write("Infancia");
}else if(numero<=12 && numero>=16){
    document.write("primaria");
}else if (numero<=17 && numero>=21){
    document.write("instituto");
}else{
    document.write("universidad");
}
