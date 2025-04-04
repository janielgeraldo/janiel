const names =['janiel','pedro','manuel']

names.forEach(function(name){
    // console.log(name);
    

})


const nombres = ['manuel','sara','miguel']

const nuevoNom = nombres.map(function(nombre){
    return nombre
})



const nuevo = nombres.find(function(nombre){
    if(nombre === 'sara'){
        return true
    }
    return nombre === 'sara'
})




const pruebas = ['manuel','malone',"migel"]

const nuevoPrueba = pruebas.filter(function(prueba){
    if(prueba !== 'manuel'){
        return prueba
    }
})

console.log(nuevoNom);
// console.log(nombres);

const prueba0 = ['manuel','malone','migel']
const prueba1 = ['luna','sara','luis']
console.log(prueba0.concat(prueba1));

