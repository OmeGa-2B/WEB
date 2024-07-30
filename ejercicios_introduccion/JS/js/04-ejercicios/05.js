let array = [{
    id:1,
    name: 'Nicolas',
},
{
    id:2,
    name: 'Felipe',
},
{
    id:3,
    name: 'Chanchito',
}];

let pares = [
    [1,{id:1,name:"Nicolas"}],
    [1,{id:2,name:"Felipe"}],
    [1,{id:3,name:"Chanchito"}],
];

function toPairs(arr){
    let pairs = [];
    for(idx in arr){
        let elemento = arr[idx]
        pairs[idx] = [elemento.id,elemento];
    }
    return pairs;
}

let resultado = toPairs(array);
console.log(resultado);



let pairs = [
    [1,{name:"Nicolas"}],
    [1,{name:"Felipe"}],
    [1,{name:"Chanchito"}],
];

function toCollection(arr){
    let collection = [];
    for(idx in arr){
        let elemento = arr[idx];
        collection[idx] = elemento[1];
        collection[idx].id = elemento[0];
    }
    return collection;
}

let resultado2 = toCollection(pairs);
console.log(resultado);