let columnas = prompt("Introduce el número de columnas:");
let filas = prompt("introduce el numero de filas ")
let alto = prompt("Introduce el alto ");
let ancho = prompt("Introduce el ancho):");


document.write("<table border='1' cellspacing ='0' bgcolor='white' width='200'><tr>");


for (let i = 0; i < filas; i++) {
    document.write("<tr bgcolor='white' height='"+alto+"'>")
   for(let j = 0; j < columnas; j++)
    document.write("<td bgcolor='white'  width='"+ancho+"'></td>")
   document.write("</tr>");
}   
document.write("</table>");