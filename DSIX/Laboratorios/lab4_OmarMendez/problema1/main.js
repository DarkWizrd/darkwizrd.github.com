function rellenar() {
  let matriz = [];
  for (let i = 0; i <= 2; i++) {
    //Ciclo para moverse por las filas
    matriz[i] = [];
    for (let a = 0; a <= 2; a++) {
      let numero = parseFloat(prompt("Digite un numero"));
      while (isNaN(numero)) {
        numero = parseFloat(prompt("Por favor, introduzca un número válido"));
      }
      matriz[i][a] = numero;
    }
  }
  return matriz;
}

function calcular() {
  let pares = 0,
    sumNones = 0,
    nones = 0;
  let matriz = rellenar();
  let mensaje;
  for (let i = 0; i <= 2; i++) {
    //Ciclo para moverse por las filas
    for (let a = 0; a <= 2; a++) {
      if (matriz[i][a] % 2 === 0) {
        pares++;
      } else {
        sumNones += parseFloat(elemento);
        nones++;
      }
    }
  }
  mensaje = "Se almacenaron " + pares + " números pares en el arreglo";
  if (nones !== 0) {
    mensaje +=
      "\nSe almacenaron " +
      nones +
      " números impares, el promedio de estos números es " +
      sumNones / nones;
  }
  document.writeln(mensaje);
}
// Genere un programa en JavaScript que permita leer 9 valores numéricos que serán almacenados en un arreglo de 3X3.El programa deberá mostrar al final, como resultado:
// • La cantidad de números pares que fueron almacenados en el arreglo.
// • El promedio de los números impares almacenados en el arreglo.
