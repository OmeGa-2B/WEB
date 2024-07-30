const user = {
    id:1,
};

user.name = 'Bryan';
user.guardar =  function(){
    console.log('Guardando',user.name);
}

user.guardar()

delete user.name;
delete user.guardar;
console.log(user);

const user1 = Object.freeze({id:1});//evita que se le agruegue propiedades
