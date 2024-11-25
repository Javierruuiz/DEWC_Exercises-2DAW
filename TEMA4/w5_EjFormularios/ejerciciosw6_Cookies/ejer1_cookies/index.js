
function CrearCookie(identificador, valor, minutos) {
    const fechaExpiracion = new Date();
    fechaExpiracion.setTime(fechaExpiracion.getTime() + (minutos * 60 * 1000));
    document.cookie = `${encodeURIComponent(identificador)}=${encodeURIComponent(valor)}; expires=${fechaExpiracion.toUTCString()}; path=/`;
  }

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
  function BorrarCookie(identificador) {
    document.cookie = `${encodeURIComponent(identificador)}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
  }

  function SaludarUsuario() {
    const nombreUsuario = LeerCookie("usuario");
    const saludoElemento = document.getElementById("greeting");
    if (nombreUsuario) {
      saludoElemento.textContent = `¡Hola, ${nombreUsuario}! Bienvenido de nuevo.`;
    } else {
      const nuevoNombre = prompt("Bienvenido, ¿cuál es tu nombre?");
      if (nuevoNombre) {
        CrearCookie("usuario", nuevoNombre, 5); // Crear cookie con expiración de 5 minutos
        saludoElemento.textContent = `¡Hola, ${nuevoNombre}!`;
      } else {
        saludoElemento.textContent = "¡Hola, invitado!";
      }
    }
  }
  document.getElementById("logout").addEventListener("click", function(event) {
    event.preventDefault();
    BorrarCookie("usuario");
    alert("Sesión cerrada. Recarga la página para ingresar de nuevo.");
    location.reload();
  });
  SaludarUsuario();