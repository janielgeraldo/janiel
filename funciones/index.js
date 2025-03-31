
function hello(){
return function (){
    return {nombre:"janiel", apellido:"geraldo"}
}
}


function hola(nama){
    return 'hola ' + nama
}

function add(x, y = 0){

    return x + y
}


// add
console.log(add(23,44));
// hola
console.log(hola('janiel'));
// hello
console.log(hello());
