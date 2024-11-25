//funcion para crear una cookie
function CrearCookie(identificador, valor, fechaExpiracion) {
    let cookieString = `${encodeURIComponent(identificador)}=${encodeURIComponent(valor)}`;
    
    if (fechaExpiracion) {
      const fecha = new Date(fechaExpiracion);
      cookieString += `; expires=${fecha.toUTCString()}`;
    }
    
    document.cookie = cookieString + "; path=/";
  }
//funcion  para leer una cookie  
function LeerCookie(identificador) {
    const cookies = document.cookie.split("; ");
    
    for (let cookie of cookies) {
      const [nombre, valor] = cookie.split("=");
      if (nombre === encodeURIComponent(identificador)) {
        return decodeURIComponent(valor);
      }
    }
    
    return null;
  }
//funcion para eliminar una cookie  
function BorrarCookie(identificador) {
    document.cookie = `${encodeURIComponent(identificador)}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
  }
  // Crear una cookie que expire el 31 de diciembre de 2024
CrearCookie("usuario", "JuanPerez", "2024-12-31");

// Leer el valor de la cookie "usuario"
console.log(LeerCookie("usuario")); // Devuelve "JuanPerez"

// Borrar la cookie "usuario"
//BorrarCookie("usuario");

// Intentar leer la cookie después de borrarla
//console.log(LeerCookie("usuario")); // Devuelve null
