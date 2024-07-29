//numero mayor

function num_mayor(a,b){
    if(a < b){
        return b;
    }
    else if(b<a){
        return a;
    }
    else{
        console.log('los numero son iguales');
    }

}

let mayor = num_mayor(4,39);
console.log('el numero mayor es: ',mayor);