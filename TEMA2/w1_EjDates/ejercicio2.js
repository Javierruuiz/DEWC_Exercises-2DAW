var fechaHoy= new Date();
document.write("<p>fecha actual: "+fechaHoy.toDateString);

var fechaSumada = new Date();
fechaSumada.setDate(fechaHoy.getDay() + 85);
document.write("<p>la fecha actual mas 85 dias queda: "+fechaSumada.toDateString());

var fechaResta = new Date();
fechaResta.setDate(fechaSumada.getDate-187);
document.write("<p>la hora restada a la sumada es:" +fechaResta.toDateString());

fechaSumada.setFullYear(fechaSumada.getFullYear()+2);
document.write("<p>la fecha sumadfa dos años es: "+fechaSumada.toDateString());

fechaResta.setFullYear(fechaResta.getHours()-24);
document.write("<p>la fecha restada 24 horas es: "+fechaResta.toDateString());

var fechaResto = new Date();
fechaResto.setDate(fechaSuma-fechaResta);
document.write("<p>la fecha de la resta de las dos fechas es: "+fechaResto.toDateString());