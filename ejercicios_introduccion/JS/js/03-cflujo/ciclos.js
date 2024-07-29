//while

let i = 0;
while(i < 10){
    if(i%2 == 0){
        console.log("Numero imapr :",i);
    }
    i++;
}

console.log("fuera del while");

//do-while
console.log("do-while");

i=0;
do{
    if(i%2 == 0){
        console.log("Numero imapr :",i);
    }
    i++;
}while(i<10);

//for

console.log("for");
for(i=0;i<10;i++){
    if(i%2 == 0){
        console.log("Numero imapr :",i);
    }
}

//for of
console.log("for of");
let animales = ['chanchito feliz','Dragon','Perrito'];
for(let animal of animales){
    console.log(animal);
}

//for in
console.log("for in");
let usuario = {
    id:1,
    name: 'Chanchito feliz',
    age: 25,
}

for(let prop in usuario){
    console.log(usuario[prop]);
}

//break y continue

i = 0;
while(i<6){
    i++;
    if(i===2){
        continue;
    }
    if(i===4){
        break;
    }
    console.log(i);
}