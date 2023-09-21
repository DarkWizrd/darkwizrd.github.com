/* Problema 1: Suma de Números Pares
Escribe una función llamada sumaNúmerosPares que tome un número entero positivo n como parámetro y devuelva la suma de todos los números pares desde 1 hasta n. */
function sumaNumerosPares() {
  let numero = prompt("Digite un numero");
  let suma = 0;
  let i = 2;
  while (i <= numero) {
    suma += i;
    i += 2;
  }
  alert("La suma de los números pares es: " + suma);
}
/* Problema 2: Palabra más Larga
Escribe una función llamada palabraMasLarga que tome una cadena de palabras separadas por espacios como parámetro y devuelva la palabra más larga de la cadena. Si hay varias palabras con la misma longitud máxima, devuelve la primera que encuentres. */
function palabras() {
  let cadena = prompt("Escriba una oración cualquiera");
  cadena = cadena.split(" ");
  let palabra = "";
  cadena.forEach(elemento => {
    if (elemento.length > palabra.length) {
      palabra = elemento;
    }
  });
  alert("La palabra mas larga encontrada fue: " + palabra);
}
/* Problema 3: Números Primos
Escribe una función llamada esPrimo que tome un número entero positivo n como parámetro y devuelva true si el número es primo, o false en caso contrario. Un número primo es aquel que solo es divisible por 1 y por sí mismo. */
function esPrimo() {
  let numero = parseInt(prompt("Digite un numero entero positivo."));
  let primo = true
  alert("El dato es un numero? " + (typeof numero === "number"))
  for (let i = 0; i <= Math.sqrt(numero); i++) {
    if (numero % i == 0) {
      primo = false;
    }
  }
  if (primo == false) {
    alert(numero + " no es un numero primo")
  } else {
    alert(numero + " es un numero primo")
  }
}
/* Problema 4: Inversión de Cadenas
Escribe una función llamada invertirCadena que tome una cadena como parámetro y devuelva la cadena invertida. Por ejemplo, si la entrada es "Hola", la salida debería ser "aloH". */
function invertir() {
  let cadena = prompt("Escribe algo!");
  let invertido = '';
  for (const element of cadena) {
    // TODO document why this block is empty
    invertido = cadena.split('').reverse().join('');

  }
  alert(invertido);
}
/*Problema 5: Eliminar Duplicados
Escribe una función llamada eliminarDuplicados que tome un array de números como parámetro y devuelva un nuevo array que contenga los mismos elementos pero sin duplicados. El orden de los elementos en el nuevo array debe ser el mismo que en el array original.*/
function duplicados() {
  let numeros = new Array();
  let filtrados = new Array();
  let num = 0, num2 = 0;
  let i = 0;
  let n=parseInt(prompt("Cuantos números desea ingresar?"))
  for (i = 0; i < n; i++) {
    numeros[i] = parseInt(prompt("Numero " + (i + 1)));
  }
  for (i = 1; i < numeros.length; i++) {
    num = numeros[i];
    if (!(filtrados.includes(num))) {
      /* array.includes(num) verifica si el elemento ya existe dentro del array, si no es asi lo añade y continua con los otros números. toda esta operación podrá hacerse en el mismo ciclo pero puede que no necesite filtrarse inmediatamente. */
      filtrados.push(num);
    }
  }
  console.log(numeros);
  console.log("Arreglo filtrado " + filtrados);
}