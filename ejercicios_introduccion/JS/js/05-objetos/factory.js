
function crearUsuario(name,email){
    return {
        id:1,
        email,
        name,
        activo: true,
        recuperar_clave: function(){
            console.log('Recuperando contrasena')
        },//funcion anonima
    };
}

let user1 = crearUsuario('Bryan','asdads@sdasd.com')
console.log()

//funciones cons6ructoras
function Users(){
    this.id = 1;
    this.recuperar_clave = function (){
        console.log('RECUPERANDO CLAVE...')
    }
}

let Usuario = new Users();
console.log(Usuario);

