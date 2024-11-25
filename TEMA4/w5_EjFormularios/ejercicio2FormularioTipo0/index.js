const usuarioInput = document.getElementById("usuario");
const botonEnviar = document.getElementById("botonEnviar");

const minuscula = document.getElementById("minuscula");
const mayuscula = document.getElementById("mayuscula");
const longitudMinima = document.getElementById("longitudMinima");

usuarioInput.addEventListener("input", () => {
  const valor = usuarioInput.value;

  if (/[a-z]/.test(valor)) {
    minuscula.classList.remove("invalido");
    minuscula.classList.add("valido");
  } else {
    minuscula.classList.add("invalido");
    minuscula.classList.remove("valido");
  }

  if (/[A-Z]/.test(valor)) {
    mayuscula.classList.remove("invalido");
    mayuscula.classList.add("valido");
  } else {
    mayuscula.classList.add("invalido");
    mayuscula.classList.remove("valido");
  }

  if (valor.length >= 6) {
    longitudMinima.classList.remove("invalido");
    longitudMinima.classList.add("valido");
  } else {
    longitudMinima.classList.add("invalido");
    longitudMinima.classList.remove("valido");
  }

  if (
    minuscula.classList.contains("valido") &&
    mayuscula.classList.contains("valido") &&
    longitudMinima.classList.contains("valido")
  ) {
    botonEnviar.disabled = false;
  } else {
    botonEnviar.disabled = true;
  }
});
