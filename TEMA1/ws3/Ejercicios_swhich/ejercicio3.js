//mini calculadora

let num1 = parseint(prompt("Ingrese el primer número:"));
let num2 = parseint(prompt("Ingrese el segundo número:"));
let operacion = prompt("Ingrese la operación (+, -, *, /):");

switch (operacion) {
  case "+":
    document.write(num1 + num2);
    break;
  case "-":
    document.write(num1 - num2);
    break;
  case "*":
    document.write(num1 * num2);
    break;
  case "/":
    document.write(num1 / num2);
    break;
  default:
    document.write("Operación inválida.");
}