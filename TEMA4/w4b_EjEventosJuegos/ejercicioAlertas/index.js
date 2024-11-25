window.onload=() =>{
    document.getElementById("container").addEventListener("click", (e) => {
    console.log("Has pulsado en el con el contenido: " + e.target.textContent);
});
}