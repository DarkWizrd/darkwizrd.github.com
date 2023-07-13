$(document).ready(function () {
  $("#btn1").click(function () {
    let sirena = $("#sirena");
    let flash = $("#flash").val();
    let indiana = $("#indiana").val();

    if (sirena == "on") {
      $("#descripcion1").load("./text/mermaid.txt");
    }
    if (indiana == "on") {
      $("#descripcion2").load("./text/jones.txt");
    }
    if (flash == "on") {
      $("#descripcion3").load("./text/flash.txt");
      var urlImagen = "./img/flash.jpg";
      $("#poster").attr("src", urlImagen);
    }
  });
});
