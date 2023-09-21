const fs = require('fs');
const path = require('path');

// Función recursiva para renombrar archivos y carpetas de forma recursiva
function renameFilesAndFoldersRecursively(folderPath, stringToRemove) {
  // Lee el contenido de la carpeta
  fs.readdirSync(folderPath).forEach((file) => {
    const filePath = path.join(folderPath, file);

    // Obtiene información del archivo o carpeta
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      // Si es una carpeta, llama a la función de manera recursiva
      renameFilesAndFoldersRecursively(filePath, stringToRemove);
    } else {
      // Si es un archivo, renombra el archivo eliminando la cadena de caracteres definida por el usuario
      const newFileName = file.replace(stringToRemove, '');
      const newFilePath = path.join(folderPath, newFileName);

      // Renombra el archivo
      fs.renameSync(filePath, newFilePath);
      console.log(`Archivo ${file} renombrado como ${newFileName}`);
    }
  });

  // Renombra la carpeta eliminando la cadena de caracteres definida por el usuario
  const newFolderName = path.basename(folderPath).replace(stringToRemove, '');
  const newFolderPath = path.join(path.dirname(folderPath), newFolderName);

  // Renombra la carpeta
  fs.renameSync(folderPath, newFolderPath);
  console.log(`Carpeta ${folderPath} renombrada como ${newFolderPath}`);
}

// Ruta de la carpeta
const folderPath = 'C:/Users/maste/Music';

// Cadena de caracteres a eliminar (definida por el usuario)
const stringToRemove = '[SPOTIFY-DOWNLOADER.COM] ';

// Llama a la función para renombrar archivos y carpetas de forma recursiva
renameFilesAndFoldersRecursively(folderPath, stringToRemove);

/*para usar el programa, ejecuta un cmd en la ubicación de este archivo
y luego ejecuta el comando node renombrar.js
*/


