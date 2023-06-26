const fs = require("fs");

// Leemos el archivo JSON
fs.readFile("ejemplo.json", "utf8", (error, data) => {
  if (error) {
    console.error(error);
    return;
  }

  // Convertimos el JSON a un objeto JavaScript
  const persona = JSON.parse(data);

  // Modificamos la edad
  persona.edad = 60;

  // Convertimos el objeto de vuelta a JSON
  const nuevoJSON = JSON.stringify(persona);

  // Escribimos el archivo modificado
  fs.writeFile("ejemplo.json", nuevoJSON, "utf8", (error) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log("El archivo fue modificado exitosamente");
  });
});
