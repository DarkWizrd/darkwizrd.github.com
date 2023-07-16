// Problema 1: Determinar si un año es bisiesto
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

// Problema 2: Calcular el índice de masa corporal (IMC)
function imc(peso, altura) {
  let imc, mensaje;
  imc = (peso * 0.4536) / (altura * altura);
  imc = imc.toFixed(2);

  if (imc > 25) {
    mensaje =
      "Cuidado, estás en sobrepeso.\nTu índice de masa corporal es: " + imc;
  } else if (imc < 18.5) {
    mensaje =
      "Cuidado, estás por debajo de tu peso ideal.\nTu índice de masa corporal es: " +
      imc;
  } else {
    mensaje =
      "Felicidades, estás en tu rango de peso normal.\nTu índice de masa corporal es: " +
      imc;
  }

  mensaje += "\nRecuerda alimentarte bien y hacer ejercicio regularmente.";
  return mensaje;
}

// Problema 3: Determinar si un número es par o impar
function pares(num) {
  if (num % 2 === 0) {
    return "El número es par.";
  } else {
    return "El número es impar.";
  }
}

// Problema 4: Calificar respuestas de una prueba
function calificar(nota) {
  let answers = ["a", "b", "a", "b", "c"],
    puntos = 0,
    mensaje;

  for (let i = 0; i < answers.length; i++) {
    alert(
      "Pregunta " +
        (i + 1) +
        ":\nTu respuesta: " +
        nota[i] +
        "\nRespuesta correcta: " +
        answers[i]
    );

    if (answers[i] === nota[i]) {
      puntos += 1;
    }
  }

  if (puntos == 5) {
    mensaje = "Felicidades, tu nota es A";
  } else if (puntos == 4) {
    mensaje = "Tu nota es C";
  } else {
    mensaje = "Deberás repetir la prueba";
  }

  return mensaje;
}

// Problema 5: Construir una pirámide con bloques
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
      " bloques de altura.\nNo sobran bloques."
    );
  } else {
    return (
      "La altura de la pirámide es de " +
      altura +
      " bloques de altura.\nCon " +
      material +
      " bloques sobrantes."
    );
  }
}

// Problema 8: Verificar si se ha leído un libro
let LibroJS = {
  nombre: "Mastering JavaScript",
  autor: "M. White",
  precio: 25.0,
  pdf: false,
  leer() {
    return "Ya he leído este libro";
  },
};
