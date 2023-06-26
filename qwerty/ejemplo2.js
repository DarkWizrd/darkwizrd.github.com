// Obtén una referencia al elemento de la tabla en tu HTML donde deseas mostrar los datos
function mostrar() {
  var tabla = document.getElementById("tablaDatos");

  // Realiza una solicitud para cargar el archivo JSON
  fetch("datos.json")
    .then(function (response) {
      return response.json(); // Analiza el contenido JSON de la respuesta
    })
    .then(function (data) {
      // Accede a los datos del archivo JSON
      var personas = data.personas;

      // Itera sobre los datos de las personas y genera filas y celdas en la tabla
      personas.forEach(function (persona) {
        // Crea una nueva fila en la tabla
        var fila = tabla.insertRow();

        // Crea una celda para el nombre
        var celdaNombre = fila.insertCell();
        celdaNombre.innerHTML = persona.nombre;

        // Crea una celda para la edad
        var celdaEdad = fila.insertCell();
        celdaEdad.innerHTML = persona.edad;

        // Crea una celda para la ciudad
        var celdaCiudad = fila.insertCell();
        celdaCiudad.innerHTML = persona.ciudad;
      });
    })
    .catch(function (error) {
      console.log(error); // Manejo de errores
    });
}
