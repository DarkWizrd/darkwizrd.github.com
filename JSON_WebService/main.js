async function obtenerDatos() {
  const response = await fetch("http://127.0.0.1:5500/JSON_WebService/datos.json");
  const json = await response.text();
  //console.log(json);
  //console.log(JSON.parse(json));
  //const data = JSON.parse(json);
  //editar un json localmente
  //data.nombre="Clesy";
  //data.apellido="Jaramillo"
  //console.log(data.nombre + " " + data.apellido);
  //document.getElementById("mostrarDatos").textContent ="Esto es un dato retornado de JSON "+data.nombre" "+data.apellido;
}
obtenerDatos();
