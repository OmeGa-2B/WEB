function getbyIdx(arr,idx) {
    let longitud_arreglo = arr.length;
    if(longitud_arreglo < idx){
        return false;
    }
    if(idx < 0){
        return false;
    }
return arr[idx]
}

let resultado = getbyIdx([1,2],7);
console.log(resultado);