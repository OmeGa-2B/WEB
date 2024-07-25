function saludar(){
    console.log('Hola mundo');
}

saludar();

function suma(a,b){
    console.log(arguments);
    return a+b;
}

let resultado = suma(5,6,1,2,3);
console.log(resultado);

