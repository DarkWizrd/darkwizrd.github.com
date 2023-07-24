$(document).ready(function(){

  $.getJSON('cine.json', function (cartelera) {

    console.log(cartelera)
    let filaA = document.getElementsByClassName("filaA");
    let filaB = document.getElementsByClassName("filaB");
    let filaC = document.getElementsByClassName("filaC");

  });
  
})