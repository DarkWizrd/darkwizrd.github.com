var padre = document.querySelector(".content");
var body = document.querySelector("body");
var titulo = document.querySelector("#titulo");
var datos = document.querySelector(".datos_del_sitio");

//las dos funciones siguientes serán llamadas en 'aparecium()' para que estos datos sean mostrados como parte de la "magia"
function contarUrl() {
  var enlaces = document.querySelectorAll("a");
  console.log("Enlaces en la pagina ", enlaces.length);
  var nuevoP = document.createElement("p");
  nuevoP.innerHTML =
    "<h3 class style='font-family:papyrus'>Enlaces encontrados en la Pagina: " +
    enlaces.length +
    "</h3>";
  datos.appendChild(nuevoP);
}

function contarEnlaces() {
  var parrafo = document.querySelector("#parrafo3");
  var links = parrafo.querySelectorAll("a");

  console.log("Enlaces en el parrafo 3 ", links.length);
  var nuevoP2 = document.createElement("p");
  nuevoP2.innerHTML =
    "<h3 style='font-family:papyrus'>Enlaces encontrados en el tercer parrafo: " +
    links.length +
    "</h3>";
  datos.appendChild(nuevoP2);
}

function cambiarTitulo() {
  titulo.innerHTML ='<a href="https://es.wikipedia.org/wiki/Harry_Potter">Harry Potter</a> y el Misterio de JavaScript';
}


function nuevoElemento() {
  var nuevoP = document.createElement("p");
  nuevoP.innerHTML =
    "Próximo libro: <strong style='font-family:papyrus;font-size:18px;font-style: italic;'>Compilando las Reliquias Perdidas de JavaScript - Parte I</strong>";
  padre.appendChild(nuevoP);
}
nuevoElemento();
function aparecium() {
  var body = document.querySelector("body");
  body.style.backgroundImage = 'url("./assets/pic/old_sheet.jpg")';
  var titulo = document.querySelector("#titulo");
  titulo.style.fontFamily = "papyrus";
  var contenido = document.querySelector(".content");
  contenido.style.fontFamily = "shirin";
  var boton1 = document.getElementById("boton1");
  var boton2 = document.getElementById("boton2");
  boton1.classList.add("magia");
  boton2.classList.add("magia");
  contarUrl();
  contarEnlaces();
}
