/*
Genere un script que solicite al usuario el nombre y edad de dos personas. Determine quién es la persona más longeva e indíquelo mediante un mensaje por pantalla (alerta). Genere un archivo *.js y realice un llamado de este script desde un documento HTML básico.
*/
let name1, name2, edad1, edad2;
//Solicitud de los datos de la primera persona
name1 = prompt("Cual es el nombre del primer participante?");
edad1 = parseInt(prompt("Cuantos años tiene esta persona?"));

//Solicitud de los datos de la segunda persona
name2 = prompt("Cual es el nombre del segundo participante?");
edad2 = parseInt(prompt("Cuantos años tiene esta persona?"));

//Validación de la edad de los participantes
if (edad1 == edad2) {
  alert("Ambos participantes tienen la misma edad.");
} else if (edad1 > edad2) {
  alert(name1 + " es mayor.");
} else alert(name2 + " es mayor.");
