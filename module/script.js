import { version, addTwoNumber, person, add, subtract, multiply } from "./module.js";
import defaultFun from "./module.js"; // Default Function Not Require curly bracket
import * as MATH from './constants and function.js'


console.log(version);
document.body.append(version)
console.log('');





// Create a module that exports a function to add two numbers. Import and use this module in another script.

addTwoNumber(10, 20)
console.log('');






// Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.

console.log(person.name);
person.greet()
console.log('');






// Create a module that exports multiple functions using named exports. Import and use these functions in another script.

console.log(add(5, 3));
console.log(subtract(5, 3));
console.log(multiply(5, 3));
console.log('');





// Task 4: Create a module that exports a single function using default export. Import and use this function in another script.

defaultFun()
console.log('');







// Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.

console.log(MATH.PI);
console.log(MATH.E);
console.log(MATH.add(26, 40));
console.log(MATH.subtract(50,33));
console.log(MATH.multiply(12,9));
console.log('');






// Install a third-party module (e.g., Iodash ) using npm. Import and use a function from this module in a script.


// Install a third-party module (e.g., axios ) using npm. Import and use this module to make a network request in a script.


// Use a module bundler like Webpack or Parcel to bundle multiple JavaScript files into a single file. Write a script to demonstrate the bundling process.

