$(document).ready(function () {
  $("body").css({ "background-color": "black", color: "white" });

  $("#resultado").click(function () {
    var edad1 = $("#edad1").text();
    var edad2 = $("#edad2").text();

    alert($("#edad1").text());
  });
});
/* Genere un script que solicite al usuario el nombre y edad de dos personas.
Determine quién es la persona más longeva e indíquelo mediante un mensaje por pantalla (alerta).
Genere un archivo *.js y realice un llamado de este script desde un documento HTML básico. */
