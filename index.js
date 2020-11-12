const { add, subtract } = require("./myModule");

let name = "Tu Hoa Huynh";
console.log(name);

function printName(person) {
    return `Hello, ${person}`;
}

console.log(printName(name));

console.log(add(5, 50));
console.log(subtract(10, 20));