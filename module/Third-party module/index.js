import axios from "axios"
import lodash from "lodash";


// Install a third-party module (e.g., axios ) using npm. Import and use this module to make a network request in a script.

function getAxiosData() {
  axios.get('https://reqres.in/api/users')
  .then(response => console.log(response.data))
  .catch(error => error);
}

getAxiosData()








// Install a third-party module (e.g., Iodash ) using npm. Import and use a function from this module in a script.

const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'David', age: 32 },
];

const oldestUser = lodash.maxBy(users, 'age');

console.log(oldestUser);

console.log(lodash.upperCase('shivam kumar'));
console.log(lodash.isArray([1,2,3,4,5]));
