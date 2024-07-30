function Usuario(nombre){
    this.nombre = nombre;
}

console.log(Usuario.name);
console.log(Usuario.length);

const U =  Usuario;
let user = new U('Omega');
console.log(user);

function of(Fn,arg){
    return new Fn(arg);
}

let user1 = of(Usuario,'Al');
console.log(user1);

function returned(){
    return function(){
        console.log('Hola');
    }
}

let saludo = returned();
saludo()

//contructor de function
/*
const Point = new Function('x','y',`
    this.x =x;
    this.y =y;
    this.dibujar = function(){
        console.log('Dinujando');
        }
`);*/

function Punto(x,y){
    this.x=x;
    this.y=y;
    this.dibujar = function(){
        console.log('Dibujando');
    }
}

let punto = {z:7};
Punto.call(punto,1,2);
Punto.apply(punto,[1,2]);
console.log(punto);


