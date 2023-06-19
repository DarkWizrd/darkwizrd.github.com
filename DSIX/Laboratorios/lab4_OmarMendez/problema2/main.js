function rellenar() {
  let matriz = [];
  for (let i = 0; i < 3; i++) {
    matriz[i] = [];
    for (let a = 0; a < 3; a++) {
      let numero = parseFloat(prompt("Digite un numero"));
      while (isNaN(numero)) {
        numero = parseFloat(prompt("Por favor, introduzca un número válido"));
      }
      matriz[i][a] = numero;
    }
  }
  return matriz;
}

function magia() {
  let sumas = [],
    sumFila = 0,
    sumColumna = 0,
    diag1 = 0,
    diag2 = 0,
    iguales,
    elemento = 0,
    total = 0,
    f,
    c;
  let matriz = rellenar();
  for (f = 0; f < 3; f++) {
    for (c = 0; c < 3; c++) {
      //se suma una ftila y una columna a la vez, luego se introducen en el arreglo sumas
      sumFila += matriz[f][c];
      sumColumna += matriz[c][f];
    }
    sumas.push(sumFila);
    sumas.push(sumColumna);
    sumFila = 0;
    sumColumna = 0;
  }
  diag1 = matriz[0][0] + matriz[1][1] + matriz[2][2];
  sumas.push(diag1);
  diag2 = matriz[0][2] + matriz[1][1] + matriz[2][0];
  sumas.push(diag2);
  elemento = sumas[0];
  f = 0;
  while (f < sumas.length) {
    if (elemento === sumas[f]) {
      iguales = true;
      elemento = sumas[f];
    } else {
      iguales = false;
    }
    total = sumas[f];
    f++;
  }
  let mensaje = iguales
    ? "El arreglo es mágico.\nLa suma es " + total
    : "El arreglo no es mágico";
  return mensaje;
}
alert(magia());
/*
00  01  02
10  11  12
20  21  22
*/

/* Escriba una función en Javascript que permita leer una matriz de 3x3 y compruebe si ésta
es una matriz mágica. Una matriz mágica es una matriz cuadrada que tiene una
característica especial: la suma de las filas, de las columnas y las diagonales es igual
(totaliza igual).
Considere lo siguiente:
• El resultado de las sumatorias deberá ser almacenado en un arreglo llamado sumas.
• La función debe indicar si la matriz es mágica o no; y de serlo, deberá también mostrar el total de la suma como parte de la respuesta.

 * Utilice la siguiente matriz para comprobar su código:
8 1 6
3 5 7
4 9 2
 */
