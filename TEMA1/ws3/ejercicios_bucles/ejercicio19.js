let columnas =8;
let filas = 8;

let ancho = prompt("Introduce el ancho):");
let alto = ancho;

document.write("<table border='1' cellspacing ='0' bgcolor='white' width='200'><tr>");


for (let i = 0; i < filas; i++) {
    document.write("<tr bgcolor='white' height='"+alto+"'>")
    if(i % 2 == 0){
        document.write("<td bgcolor='black'"+ancho+">")
    }else{
        document.write("<td bgcolor='white'"+ancho+">")
    }
   for(let j = 0; j < columnas; j++)
    document.write("<td bgcolor='white'  width='"+ancho+"'></td>")
   document.write("</tr>");
}   
document.write("</table>");