const version = 'ES6 Javascript';




// Create a module that exports a function to add two numbers. Import and use this module in another script.

function addTwoNumber(num1, num2) {
    console.log(num1 + num2);
}






// Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.

const person = {
    name: 'Shivam Kumar',
    age: 24,
    greet: function() {
        console.log(`Hello, my name is ${this.name}  and I am ${this.age} years old.`);
    }
}





// Create a module that exports multiple functions using named exports. Import and use these functions in another script.

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

export { add, subtract, multiply };






// Create a module that exports a single function using default export. Import and use this function in another script.

function defaultFun() {
    console.log('This is a single function using the default export');
}


export default defaultFun
export {version, addTwoNumber, person}