//si el nuemro es mayor de 100 entonces aplica un 15%

let numero = prompt("ingrese un numero ");
numero=parseInt(numero);

if(numero>100){
    numero=numero*(numero%100);
    document.write("el numero suoera los 100 asiq se le aplicara un 15% de descuento que es; "+numero );
}else{
    document.write("el numero no supera el valor de 100");
}