//problema 1
function bisiesto() {
  let anno, mensaje;
  anno = parseInt(prompt("Digite un año"));
  if ((anno % 4 === 0 && anno % 100 !== 0) || anno % 400 === 0) {
    mensaje = anno + " es un año bisiesto.";
  } else {
    mensaje = anno + " es un año normal.";
  }
  if (anno < 1582) {
    mensaje += "\nEste año no corresponde a la era gregoriana";
  }
  alert(mensaje);
}
//problema 2
function imc(peso, altura) {
  let imc, mensaje;
  imc = (peso * 0.4536) / (altura * altura);
  imc = imc.toFixed(2);
  if (imc > 25) {
    mensaje =
      "Cuidado, estás en sobrepeso.\nTu indice de masa corporal es: " + imc;
  } else if (imc < 18.5) {
    mensaje =
      "Cuidado, estas por debajo de tu peso ideal.\nTu indice de masa corporal es: " +
      imc;
  } else {
    mensaje =
      "Felicidades, estas en tu rango de peso normal\nTu indice de masa corporal es: " +
      imc;
  }
  mensaje += "\nRecuerda alimentarte bien y hacer ejercicio regularmente.";
  return mensaje;
}
//Problema 3
function pares(num) {
  if (num % 2 === 0) {
    return "El numero es par.";
  } else {
    return "El numero es impar.";
  }
}
//problema 5
function piramide(bloques) {
  let altura = 0,
    base = 0,
    material;
  material = bloques;
  while (material >= base + 1) {
    altura += 1;
    base += 1;
    material -= base;
  }
  if (material === 0) {
    return (
      "La altura de la pirámide es de " +
      altura +
      " bloques de altura\nNo sobran bloques"
    );
  } else {
    return (
      "La altura de la pirámide es de " +
      altura +
      " bloques de altura\nCon " +
      material +
      " bloques sobrantes"
    );
  }
}
//problema 8
let LibroJS = {
  nombre: "Mastering JavaScript",
  autor: "M. White",
  precio: 25.0,
  pdf: false,
};
function leer(titulo) {
  if (titulo == LibroJS.nombre) {
    return "Ya he leído este libro";
  } else {
    return "Libro no encontrado.";
  }
}
//problema 4
function calificar(nota) {
  let answers = ["a", "b", "a", "b", "c"],
    puntos = 0,
    mensaje;
  for (let i = 0; i < answers.length; i++) {
    alert(
      "Pregunta 1:\nTu respuesta: " +
        nota[i] +
        "\nRespuesta correcta: " +
        answers[i]
    );
    if (answers[i] === nota[i]) {
      puntos += 1;
    }
  }
  if (puntos == 5) {
    mensaje = "Felicidades, Tu nota es A";
  } else if (puntos == 4) {
    mensaje = "Su nota es C";
  } else {
    mensaje = "Deberá repetir la prueba";
  }
  return mensaje;
}
