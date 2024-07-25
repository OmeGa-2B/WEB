let nombre = "Tanjiro";
let anime = "Demon slayer";
let edad = 16;


//objeto literal
let personaje = {
    nombre: "Tanjiro",
    anime:"Demon Slayer",
    edad:16,
};
console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['anime']);

//modificar una propiedad
personaje.edad = 21;
personaje['edad'] = 16;

//eliminar una variable
delete personaje.anime;
console.log(personaje)