function calculo() {
  var suma1 = 0, // Variable para almacenar la suma de las piñas del empleado 1
    suma2 = 0, // Variable para almacenar la suma de las piñas del empleado 2
    suma3 = 0; // Variable para almacenar la suma de las piñas del empleado 3
  var dEmpleado1 = document.getElementsByClassName("empleado1"); // Obtener elementos con clase "empleado1"
  var dEmpleado2 = document.getElementsByClassName("empleado2"); // Obtener elementos con clase "empleado2"
  var dEmpleado3 = document.getElementsByClassName("empleado3"); // Obtener elementos con clase "empleado3"

  for (var i = 0; i < dEmpleado1.length; i++) {
    // Recorrer los elementos y sumar los valores
    suma1 += parseFloat(dEmpleado1[i].value); // Sumar el valor del empleado 1 en la posición i
    suma2 += parseFloat(dEmpleado2[i].value); // Sumar el valor del empleado 2 en la posición i
    suma3 += parseFloat(dEmpleado3[i].value); // Sumar el valor del empleado 3 en la posición i
  }

  var padre = document.getElementById("mostrar"); // Obtener el elemento con el id "mostrar"

  document.getElementById("total1").textContent =
    "Piñas recolectadas por el empleado 1: " + suma1; // Mostrar la suma del empleado 1 en el elemento con id "total1"

  var nuevoP2 = document.createElement("p"); // Crear un nuevo elemento <p>
  nuevoP2.textContent = "Piñas recolectadas por el empleado 2: " + suma2; // Establecer el contenido del nuevo elemento <p> con la suma del empleado 2
  nuevoP2.classList.add("total"); // Agregar la clase "total" al nuevo elemento <p>
  padre.appendChild(nuevoP2); // Agregar el nuevo elemento <p> al elemento padre

  var nuevoP3 = document.createElement("p"); // Crear un nuevo elemento <p>
  nuevoP3.textContent = "Piñas recolectadas por el empleado 3: " + suma3; // Establecer el contenido del nuevo elemento <p> con la suma del empleado 3
  nuevoP3.classList.add("total"); // Agregar la clase "total" al nuevo elemento <p>
  padre.appendChild(nuevoP3); // Agregar el nuevo elemento <p> al elemento padre
}

function validarNumeros(input) {
  // Eliminar cualquier carácter no numérico utilizando una expresión regular
  input.value = input.value.replace(/\D/g, "");
}
