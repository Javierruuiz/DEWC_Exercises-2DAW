
for(var i = 1;i<=10;i++){

let numero = (numero*i);
document.write("TABLA DEL "+i);
for(var j = 1;j<= 10;j++)
    document.write("<p>+"+j+"X"+i+"= "+(numero*j)+" </p>")
}