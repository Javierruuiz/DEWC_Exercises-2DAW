//tienes muchos hermanos pues toma descuento

let cantidad = prompt("introduce una cantidad");
let num_hermanos =prompt("introduce tu numero de hermanos");
cantidad = parseInt(cantidad);
num_hermanos=parseInt(num_hermanos);

if(num_hermanos>=3){
    cantidad=cantidad-(cantidad*0.85);
    document.write("gracias a tus padres tendras un 15% de descuento y se queda en :"+cantidad);
}else{
    cantidad = cantidad-(cantidad*0.95);
    document.write("por culpa de tus padres solo tendras un 10% y se queda en ")+cantidad;
}
