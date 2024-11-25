function muestraPosicion(pos){
    console.log(pos.coords.latitude);
    console.log(pos.coords.longitude); 
}

function funcionParaError(error)
{
console.log("se ha producido un error");
console.log("error numero"+ error.code);
console.log(error.message);
}

if(!navigator.geolocation){
    document.write("las cordenadas son imposible de ver ya que tendras uun fallo o estas en un tunel");
}else{
    document.write("si soporta geolocalizacion");
    //navigator.geolocation.getCurrentPosition(muestraPosicion);
    navigator.geolocation.watchPosition(muestraPosicion);
}




