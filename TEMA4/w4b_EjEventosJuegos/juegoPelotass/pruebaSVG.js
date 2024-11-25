window.onload = () => {
    let pelotas = [];
    for (let i = 0; i < 10; i++) {
        let x = Math.random() * 400 + 50;  
        let y = Math.random() * 400 + 50;  

        let pelota = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        pelota.setAttribute("id", `pelota${i}`);
        pelota.setAttribute("cx", x);
        pelota.setAttribute("cy", y);
        pelota.setAttribute("r", 40);
        pelota.setAttribute("fill", "black");
        pelota.addEventListener("click", () => {
            pelota.remove(); 
            pelotas = pelotas.filter(p => p.pelota !== pelota); 
        });

        document.getElementById("pelota").appendChild(pelota);

        pelotas.push(new Pelota(`pelota${i}`, x, y, 40, 6, 5, 600, 600));
    }

    pelotas.forEach(pelota => moverPelota(pelota));
}

class Pelota {
    constructor(id, x, y, radio, velocidadX, velocidadY, limiteX, limiteY) {
        this.pelota = document.getElementById(id);
        this.posicionX = x;
        this.posicionY = y;
        this.radio = radio;
        this.velocidadX = velocidadX;
        this.velocidadY = velocidadY;
        this.limiteX = limiteX;
        this.limiteY = limiteY;
    }
}

function moverPelota(pelota) {
    setInterval(() => {
        pelota.posicionX += pelota.velocidadX;
        pelota.pelota.setAttribute("cx", pelota.posicionX);
        if (pelota.posicionX + pelota.radio > pelota.limiteX || pelota.posicionX - pelota.radio < 0) {
            pelota.velocidadX *= -1;
        }

        pelota.posicionY += pelota.velocidadY;
        pelota.pelota.setAttribute("cy", pelota.posicionY);
        if (pelota.posicionY + pelota.radio > pelota.limiteY || pelota.posicionY - pelota.radio < 0) {
            pelota.velocidadY *= -1;
        }
    }, 30);
}

