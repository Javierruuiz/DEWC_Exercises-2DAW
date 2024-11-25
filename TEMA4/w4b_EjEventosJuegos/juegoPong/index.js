window.onload = () => {
    let pelota = new Pelota("pelota", 750, 300, 20, 5, 5, 1400, 600);
    let rectangulo1 = new Rectangulo("rectangulo1", 0, 200, 0, 0, 30, 200); 
    let rectangulo2 = new Rectangulo("rectangulo2", 1370, 200, 0, 0, 30, 200);
    let keysPressed = {};
    document.addEventListener("keydown", (event) => {
        keysPressed[event.key] = true;
    });

    document.addEventListener("keyup", (event) => {
        keysPressed[event.key] = false;
    });

    function mover() {
        moverPelota(pelota);
        moverRectangulos(rectangulo1, rectangulo2, keysPressed);
        if (detectarColision(pelota, rectangulo1) || detectarColision(pelota, rectangulo2)) {
            if (pelota.velocidadX < 20) {
                pelota.velocidadX *= -1.08; 
            } else {
                pelota.velocidadX *= -1;
            }
        }
        requestAnimationFrame(mover);
    }

    mover();
};

class Pelota {
    constructor(id, x, y, radio, velocidadX, velocidadY, limiteX, limiteY) {
        this.pelota = document.getElementById(id);
        this.X = x;
        this.Y = y;
        this.R = radio;
        this.velocidadX = velocidadX;
        this.velocidadY = velocidadY;
        this.limiteX = limiteX;
        this.limiteY = limiteY;
    }

    aumentarVelocidad() {
        this.velocidadX *= this.velocidadX + 1;
        this.velocidadY *= this.velocidadY + 1;
    }
}

class Rectangulo {
    constructor(id, x, y, velocidadX, velocidadY) {
        this.rectangulo = document.getElementById(id);
        this.X = x;
        this.Y = y;
        this.ancho = parseInt(this.rectangulo.getAttribute("width"));
        this.alto = parseInt(this.rectangulo.getAttribute("height"));
        this.velocidadX = velocidadX;
        this.velocidadY = velocidadY;
    }
}

function moverPelota(pelota) {
    pelota.X += pelota.velocidadX;
    pelota.pelota.setAttribute("cx", pelota.X);
    pelota.Y += pelota.velocidadY;
    pelota.pelota.setAttribute("cy", pelota.Y);
    if (pelota.Y + pelota.R > pelota.limiteY || pelota.Y - pelota.R < 0) {
        pelota.velocidadY *= -1;
    }
    ganaPuntos(pelota);
}

function moverRectangulos(rectangulo1, rectangulo2, keysPressed) {
    const velocidad = 5;
    const limiteInferior = 600; 
    const alturaRectangulo = 200;

    if (keysPressed["w"] && rectangulo1.Y > 0) {
        rectangulo1.Y -= velocidad;
    } else if (keysPressed["s"] && rectangulo1.Y < limiteInferior - alturaRectangulo) {
        rectangulo1.Y += velocidad;
    }
    rectangulo1.rectangulo.setAttribute("y", rectangulo1.Y);

    if (keysPressed["ArrowUp"] && rectangulo2.Y > 0) {
        rectangulo2.Y -= velocidad;
    } else if (keysPressed["ArrowDown"] && rectangulo2.Y < limiteInferior - alturaRectangulo) {
        rectangulo2.Y += velocidad;
    }
    rectangulo2.rectangulo.setAttribute("y", rectangulo2.Y);
}


function detectarColision(pelota, rectangulo) {
    const puntosPelota = {
        top: pelota.Y - pelota.R,
        bottom: pelota.Y + pelota.R,
        left: pelota.X - pelota.R,
        right: pelota.X + pelota.R,
        topLeft: { x: pelota.X - pelota.R, y: pelota.Y - pelota.R },
        topRight: { x: pelota.X + pelota.R, y: pelota.Y - pelota.R },
        bottomLeft: { x: pelota.X - pelota.R, y: pelota.Y + pelota.R },
        bottomRight: { x: pelota.X + pelota.R, y: pelota.Y + pelota.R },
    };

    const rectXMin = rectangulo.X;
    const rectXMax = rectangulo.X + rectangulo.ancho;
    const rectYMin = rectangulo.Y;
    const rectYMax = rectangulo.Y + rectangulo.alto;

    if (
        (puntosPelota.right >= rectXMin && puntosPelota.left <= rectXMax) &&
        (puntosPelota.bottom >= rectYMin && puntosPelota.top <= rectYMax) &&
        (
            (puntosPelota.topLeft.x >= rectXMin && puntosPelota.topLeft.x <= rectXMax &&
                puntosPelota.topLeft.y >= rectYMin && puntosPelota.topLeft.y <= rectYMax) ||
            (puntosPelota.topRight.x >= rectXMin && puntosPelota.topRight.x <= rectXMax &&
                puntosPelota.topRight.y >= rectYMin && puntosPelota.topRight.y <= rectYMax) ||
            (puntosPelota.bottomLeft.x >= rectXMin && puntosPelota.bottomLeft.x <= rectXMax &&
                puntosPelota.bottomLeft.y >= rectYMin && puntosPelota.bottomLeft.y <= rectYMax) ||
            (puntosPelota.bottomRight.x >= rectXMin && puntosPelota.bottomRight.x <= rectXMax &&
                puntosPelota.bottomRight.y >= rectYMin && puntosPelota.bottomRight.y <= rectYMax)
        )
    ) {
        return true;
    }

    return false;
}

function ganaPuntos(pelota) {
    if ((pelota.X + pelota.R) > pelota.limiteX) {
        let punto = parseInt(document.getElementById("jugador1").textContent);
        punto++;
        document.getElementById("jugador1").textContent = punto;

        pelota.X = pelota.limiteX / 2;
        pelota.Y = pelota.limiteY / 2;
        pelota.velocidadX = 5;
        pelota.velocidadY = (Math.random() > 0.5 ? 1 : -1) * 5;

        pelota.pelota.setAttribute("cx", pelota.X);
        pelota.pelota.setAttribute("cy", pelota.Y);
    }

    if ((pelota.X - pelota.R) < 0) {
        let punto = parseInt(document.getElementById("jugador2").textContent);
        punto++;
        document.getElementById("jugador2").textContent = punto;

        pelota.X = pelota.limiteX / 2;
        pelota.Y = pelota.limiteY / 2;
        pelota.velocidadX = -5;
        pelota.velocidadY = (Math.random() > 0.5 ? 1 : -1) * 5;

        pelota.pelota.setAttribute("cx", pelota.X);
        pelota.pelota.setAttribute("cy", pelota.Y);
    }
}
