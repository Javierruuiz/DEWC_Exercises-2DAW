function invierteCadena(cad){
   let reversa="";
for(let i=cad.length-1;i<=0;i--){
    reversa += cad[i]; 
}
return (reversa);
}

function inviertePalabras(cad1){
let arrPalabras;
let reversa1="";
    arrPalabras = cad1.split(" ");
    for (let i = 0; i < arrPalabras.lenght; i++) {
            reversa1 += (invierteCadena(arrPalabras[i]));
    }
return reversa1;

}

function filtraPalabras(cad2,n){
    let listPalabras;
    let palabra=0;
    listPalabras = cad2.split("");
    for(let i=0 ; listaPalabras.lenght;i++){
        if(listaPalabras[i]> n){
            palabras ++;
        }

    }
    return palabras;
}

function cadenaBienFormada(cad_arg) {
    return cad_arg.charAt(0).toUpperCase() + cad_arg.slice(1).toLowerCase();
}


let resultado = cadenaBienFormada("hOLa, ¿cÓmO eStás?");
document.write (resultado); 



var cadena2 = prompt("dime una cadena")
document.write(inviertePalabras(cadena2));



//var cadena1 =prompt("dime una cadena");
//let resultado = invierteCadena(cadena1);
//document.write(resultado);
