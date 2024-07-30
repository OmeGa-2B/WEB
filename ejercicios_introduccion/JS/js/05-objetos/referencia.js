let a = {};
let b = a;

b.prop = 1;
console.log(a,b);

let c = {prop:1};
function suma(n){
    n.prop++;
}

suma(c);
console.log(c);
