//lanzamiento de dado

function lanzamientoDado(numero){
    numero = Math.random(parseInt()*(6-1)+1);
    return numero;
}

resultado=lanzamientoDado();
document.write("el numero que ha salido es:"  +resultado)
