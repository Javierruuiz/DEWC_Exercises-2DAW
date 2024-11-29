window.onload = () => {
    document.getElementById("btn").addEventListener("click", peticionAJAXmoderna);
    document.getElementById("cargarMas").addEventListener("click", cargaPelis);
};

let peliABuscar = "";
let cargaPaginas = 1;

function peticionAJAXmoderna() {
    peliABuscar = document.getElementById("cajaTexto").value;
    cargaPaginas = 1;

    fetch("http://www.omdbapi.com/?apikey=9fe0718d&s=" + peliABuscar, { method: "GET" })
        .then((res) => res.json())
        .then((datosRecibidos) => {
            document.getElementById("numeroDeResultados").innerHTML =
                "Se han encontrado " + datosRecibidos.totalResults + " películas sobre tu búsqueda";
            console.log(datosRecibidos);

            let milista = document.getElementById("lista");
            milista.innerHTML = ""; 
            let ul = document.createElement("ul");
            milista.appendChild(ul);

            datosRecibidos.Search.forEach((pelicula) => {
                let li = document.createElement("li");
                li.innerHTML = pelicula.Title + " - " + pelicula.Year;
                ul.appendChild(li);

                let img = document.createElement("img");
                img.src = pelicula.Poster;
                img.alt = pelicula.Title;
                img.style.cursor = "pointer";

                img.addEventListener("click", () => mostrarDetalles(pelicula.imdbID));

                li.appendChild(img);
            });
        })
        .catch((err) => console.log("Error: " + err));
}

function cargaPelis() {
    fetch(
        "http://www.omdbapi.com/?apikey=9fe0718d&s=" + peliABuscar + "&page=" + ++cargaPaginas,
        { method: "GET" }
    )
        .then((res) => res.json())
        .then((datosRecibidos) => {
            let milista = document.getElementById("lista");
            let ul = document.createElement("ul");
            milista.appendChild(ul);

            datosRecibidos.Search.forEach((pelicula) => {
                let li = document.createElement("li");
                li.innerHTML = pelicula.Title + " - " + pelicula.Year;
                ul.appendChild(li);

                let img = document.createElement("img");
                img.src = pelicula.Poster;
                img.alt = pelicula.Title;


                img.addEventListener("click", () => mostrarDetalles(pelicula.imdbID));

                li.appendChild(img);
            });
        })
        .catch((err) => console.log("Error: " + err));
}

function mostrarDetalles(imdbID) {
    fetch("http://www.omdbapi.com/?apikey=9fe0718d&i=" + imdbID, { method: "GET" })
        .then((res) => res.json())
        .then((pelicula) => {
            const modal = document.getElementById("info");
            modal.innerHTML = `
                <h2>${pelicula.Title}</h2>
                <p><strong>Año:</strong> ${pelicula.Year}</p>
                <p><strong>Director:</strong> ${pelicula.Director}</p>
                <p><strong>Género:</strong> ${pelicula.Genre}</p>
                <p><strong>Sinopsis:</strong> ${pelicula.Plot}</p>
                <img src="${pelicula.Poster}" alt="${pelicula.Title}">
                <button id="cerrarModal">Cerrar</button>
            `;
            modal.style.display = "block";

            document.getElementById("cerrarModal").addEventListener("click", () => {
                modal.style.display = "none";
            });
        })
        .catch((err) => console.log("Error: " + err));
}

