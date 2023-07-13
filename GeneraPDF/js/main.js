$(document).ready(function () {
  $("#btn").click(function () {
    convertir();
  });
  function convertir() {
    var doc = new JsPDF();

    doc.text(20, 20, "Hola mundo");
    // Save the PDF
    doc.save("documento.pdf");
  }
});
