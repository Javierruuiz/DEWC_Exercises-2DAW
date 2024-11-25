
let columnas = prompt("Introduce el número de columnas:");
let alto = prompt("Introduce el alto ");
let ancho = prompt("Introduce el ancho):");

document.write("<table border='1' cellspacing ='2' bgcolor='black' width='200'><tr>");
document.write("<tr height"+ alto + " >")
let i = 0;
while(i<columnas) {
    if(i % 2 == 0){
        document.write("<td bgcolor='black'"+ancho+">")
    }else{
        document.write("<td bgcolor='white'"+ancho+">")
    }
   i++;
}   
document.write("</tr></table>");
