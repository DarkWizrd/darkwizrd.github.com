$(document).ready(function () {
  










//Valida que solo se ingresen numeros en el campo drenaje
  $('.drenaje').keypress(function(event) {
    var inputValue = event.key;
    var isValid = /^[0-9]*\.?[0-9]*$/.test(inputValue);
    if (!isValid) {
      event.preventDefault();
    }
  });
});
