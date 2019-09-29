class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greeting(){
        console.log(`My name is ${this.name} and I am ${this.age}`);
    }
 
}

console.log("here are the exports:" + exports, require, module, __dirname, __filename);


module.exports = Person;