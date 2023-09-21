$(function () {
  $('#send').click(function () {
    let numero = $('#numero').val();
    let fizz = 0, buzz = 0, fb = 0;
    let mensaje = '';
    for (let i = 1; i <= numero; i++) {
      if (i % 5 === 0 && i % 3 === 0) {
        mensaje += "FIZZBUZZ<br>"
        fb += 1;

      } else if (i % 3 === 0) {
        mensaje += "fizz<br>"
        fizz += 1;
      } else if (i % 5 === 0) {
        mensaje += "buzz<br>"
        buzz += 1;
      } else {
        mensaje += i + "<br>";
      }
    }
    mensaje += "<br><h2>hay " + fb + " FizzBuzz en " + numero + "</h2>"
    mensaje += "<br><h2>hay " + fizz + " Fizz en " + numero + "</h2>"
    mensaje += "<br><h2>hay " + buzz + " Buzz en " + numero + "</h2>"
    $('#mensaje').html(mensaje);

  });
});