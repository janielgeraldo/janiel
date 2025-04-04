import {add, multy} from "./index.js"

console.log(add(23, 24));
console.log(multy(23, 45));


const ul = document.createElement("ul")

let date = fetch("https://jsonplaceholder.typicode.com/posts")
    .then(function(response){
        return response.json()
    }).then(function(date){
        console.log(date)
        date.forEach(function (posr){
            const li = document.createElement("li")
            li.innerHTML = posr.title
            ul.append(li)

        })
        document.body.append(ul)
    })

console.log('todo lo que sigue')