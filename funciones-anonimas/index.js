// funcion flecha
const add = () =>{
    return x + y
}

const showText = () => 'hola mundo';
const showNumber = () => 23;
const showBoolean = () => true;

console.log(showText);

// 
// 
// 

const  background = 'red'
const  color = 'blue'


const button = document.createElement("button")
button.innerText = 'click me'

const autorizar = false

button.addEventListener('click',
    function(){
        if(autorizar){
            return  alert('esta autorizado')
        } 
            alert('no esta autorizado')

    }
)
button.style = `background: ${background}; color: ${color}`;

document.body.append(button)