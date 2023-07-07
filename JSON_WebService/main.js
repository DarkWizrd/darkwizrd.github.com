async function obtenerDatos() {
  const response = await fetch(
    "http://127.0.0.1:5500/JSON_WebService/datos.json"
  );
  const json = await response.text();
  //console.log(json);
  //console.log(JSON.parse(json));
  const data = JSON.parse(json);
  //console.log(data);
  //editar un json localmente
  //data.nombre="Clesy";
  //data.apellido="Jaramillo"
  //console.log(data.nombre + " " + data.apellido);
  document.getElementById("mostrarDatos").textContent =
    "Esto es un dato del archivo JSON: " + data.nombre + " " + data.apellido;
}
obtenerDatos();
//http://127.0.0.1:5500/JSON_WebService/datos.json

//https://jsonplaceholder.typicode.com/users
