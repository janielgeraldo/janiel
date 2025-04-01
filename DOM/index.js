
// titulo
const title = document.createElement("h1");
title.innerText = 'hola mundo desde JS';

// parrago
const p = document.createElement("p");
p.innerText = 'manejo del dom';


// texto 2
const title2 = document.createElement("h2");
title2.innerText = 'segundo texto';

//  boton
const button = document.createElement("button");
button.innerHTML = 'click';

button.addEventListener("click", function (){
title.innerText = "texto modificado por js"
alert('se realizo un click')
})



document.body.append(title);
document.body.append(p);
document.body.append(title2);
document.body.append(button);