// Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.

const PI = Math.PI;
const E = Math.E;

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

export { PI, E, add, subtract, multiply };