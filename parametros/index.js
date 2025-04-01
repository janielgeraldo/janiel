const use = {
    name: 'janiel',
    age: '21'
}

function printinfo(use) {

    const {name, age} = use
    return`<h1>hola `+ name + ` </h1>`
    
}


document.body.innerHTML = printinfo(use)
console.log(printinfo(use))