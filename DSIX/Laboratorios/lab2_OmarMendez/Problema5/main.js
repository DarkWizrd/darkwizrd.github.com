/*Genere un script externo que calcule el valor factorial de un número escrito por el usuario y le muestre su resultado por pantalla y consola. El factorial de un número entero n es una operación matemática que consiste en multiplicar todos los factores n x (n-1) x (n-2) x... 1. Así, el factorial de 5 (escrito como 5!) es igual a: 5*4*3*2*1*/
let num = 0,
  factorial = 1;
num = prompt("Digite un numero para calcular su factorial");
if (num != null) {
  num = parseFloat(num);
  for (let i = num; i > 0; i--) {
    factorial = factorial * i;
  }
  alert("El factorial de [" + num + "] es : " + factorial);
} else {
  alert("Fin del programa");
}
