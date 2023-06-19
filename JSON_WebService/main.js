const user = {
  nombre: "Omar",
  apellido: "Mendez",
  edad: 27,
  direccion: {
    pais: "Panama",
    ciudad: "David",
    lugar: "Urb. Lassonde",
  },
  fecha_nac: "09/02/96",
  mensaje() {
    return "Goodbye, Mr. Anderson.";
  },
};

// console.log(user);
// console.log(user.mensaje());
// console.log(JSON.stringify(user));

const friends = [
  { name: "Martin", nick: "boslik" },
  { name: "Gabriel", nick: "MrZurdo" },
  { name: "Benjamin", nick: "Leshuga" },
  { name: "Juan", nick: "juanjo" },
];

console.log(JSON.stringify(friends))


//agrega el array a 
user.friends = friends
console.log(JSON.stringify(user));