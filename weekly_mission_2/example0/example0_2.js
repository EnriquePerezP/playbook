console.log("2. Creacion de un objeto con propiedades");

const explorer = {
    name: "Enrique",
    Edad: 17,
    mission: "Node Js",
    stack: ["js","Node","Python","C"],
    blog:{
        url:"https://github.com/EnriquePerezP/playbook",
        posts:5
    }//este es un objeto
}

console.log(explorer)

console.log("Accediendo a las propiedades del objeto")
console.log(explorer.name)
console.log(explorer["name"])

console.log("Ejemplo 3: Objetos con metodos!")
const ajolonauta = {
    name: "Woopa",
    mission: "Node Js",
    sayHelloToExplorers: function(){
        console.log("Soy un ajolonauta, que onda!")
    },
    tellMeMore: function(){
        console.log(`Ajolonauta: ${this.name}`)    
    }
}

console.log("Ajolonauta")
ajolonauta.sayHelloToExplorers()
ajolonauta.tellMeMore()