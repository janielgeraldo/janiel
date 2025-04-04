export function add(x, y) {
    return x + y;
    
}

export function multy(x,y){
    return x * y;
}



const person = {
    name: "Lucas",
    age: 23,
    country: {
        city: "São Paulo",
    }
}
console.log(person.location?.city);
