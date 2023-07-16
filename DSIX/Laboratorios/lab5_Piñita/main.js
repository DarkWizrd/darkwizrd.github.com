function calculo() {
  var suma1 = 0, // Variable para almacenar la suma de las piñas del empleado 1
    suma2 = 0, // Variable para almacenar la suma de las piñas del empleado 2
    suma3 = 0; 
  var dEmpleado1 = document.getElementsByClassName("empleado1"); // Obtener elementos con clase "empleado1"
  var dEmpleado2 = document.getElementsByClassName("empleado2"); 
  var dEmpleado3 = document.getElementsByClassName("empleado3"); 

  for (var i = 0; i < dEmpleado1.length; i++) {
    // Recorrer los elementos y sumar los valores
    suma1 += parseFloat(dEmpleado1[i].value); 
    suma2 += parseFloat(dEmpleado2[i].value); 
    suma3 += parseFloat(dEmpleado3[i].value); 
  }

  var padre = document.getElementById("mostrar"); // Obtener el elemento con el id "mostrar"

  document.getElementById("total1").textContent =
    "Piñas recolectadas por el empleado 1: " + suma1; // Mostrar la suma del empleado 1 en el elemento con id "total1"

  var nuevoP2 = document.createElement("p"); // Crear un nuevo elemento <p>
  nuevoP2.textContent = "Piñas recolectadas por el empleado 2: " + suma2; // Establecer el contenido del nuevo elemento <p> con la suma del empleado 2
  padre.appendChild(nuevoP2); // Agregar el nuevo elemento <p> al elemento padre

  var nuevoP3 = document.createElement("p");
  nuevoP3.textContent = "Piñas recolectadas por el empleado 3: " + suma3;
  padre.appendChild(nuevoP3);

  var mensaje = document.createElement("p");
  mensaje.textContent = "¡Gracias por consumir piñas de Finca la Piñita!";
  padre.appendChild(mensaje);
}

function validarNumeros(input) {
  // Eliminar cualquier carácter no numérico utilizando una expresión regular
  input.value = input.value.replace(/\D/g, "");
}
