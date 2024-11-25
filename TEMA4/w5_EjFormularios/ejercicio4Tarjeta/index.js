const numeroTarjeta = document.getElementById("numeroTarjeta");
const titularTarjeta = document.getElementById("titularTarjeta");
const mes = document.getElementById("mes");
const anio = document.getElementById("anio");
const cvv = document.getElementById("cvv");
const botonEnviar = document.getElementById("botonEnviar");

numeroTarjeta.addEventListener("input", () => {
  numeroTarjeta.value = numeroTarjeta.value
    .replace(/\D/g, "")
    .replace(/(\d{4})(?=\d)/g, "$1 ");
});

cvv.addEventListener("input", () => {
  cvv.value = cvv.value.replace(/\D/g, "");
});

botonEnviar.addEventListener("click", (event) => {
  event.preventDefault();
  
  if (!/^\d{4} \d{4} \d{4} \d{4}$/.test(numeroTarjeta.value)) {
    alert("Número de tarjeta inválido.");
    return;
  }
  
  if (titularTarjeta.value.trim() === "") {
    alert("El nombre del titular no puede estar vacío.");
    return;
  }
  
  if (mes.value === "" || anio.value === "") {
    alert("Selecciona una fecha de expiración válida.");
    return;
  }
  
  if (!/^\d{3}$/.test(cvv.value)) {
    alert("CVV inválido.");
    return;
  }

  alert("Formulario enviado correctamente.");
});
