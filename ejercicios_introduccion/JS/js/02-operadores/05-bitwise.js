//utiliza la base binaria de los numeros


//el operador o devuelve la combinacion de las caadenas de bytes de los numeros
console.log(1|3) //00000011
console.log(1|4) // 1 - 00000001
                 // 4 - 00000100 = 00000101

console.log(1&3) //00000001
console.log(1&4) //00000000

//operador ternario

let edad = 16;
let acceso = edad > 17 ? 'Permitir ingreso' : 'no puede ingresar';

console.log(acceso);