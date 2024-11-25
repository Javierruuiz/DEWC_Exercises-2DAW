/**
 * @name getRandomColorSequence
 * @description Devuelve una secuencia aleatoria de ciertos colores con cierta longitud
 * 
 * @param {string[]} colors - Array de colores a ser utilizados en la secuencia
 * @param {number} length - Longitud de la secuencia
 * @returns {String[]} - Secuencia aleatoria de colores disponibles en {colors}, con longitud {length}
 *
 * @example
 *  getRandomColorSequence(["red", "blue", "green"], 4) // returns ['blue', 'red', 'red', 'green']
 */

function getRandomColorSequence(colors, length){
    nuevosColores = [];
    for(i=0;i<=length;i++){
        nuevosColores[i]=colors[Math.random()*(length)+1];
    }
    return nuevosColores;
}

console.log(getRandomColorSequence(["red", "blue", "green"], 4));
