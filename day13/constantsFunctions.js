//Activity 3: Importing entire modules
//Task 5:
import * as mathUtils  from "./constantsFunctionsDefination.js";

console.log(`PI: ${mathUtils.PI}`);
console.log(`E: ${mathUtils.E}`);

const sum = mathUtils.add(5, 3);
console.log(`The sum of 5 and 3 is: ${sum}`);

const difference = mathUtils.subtract(5, 3);
console.log(`The difference between 5 and 3 is: ${difference}`);

const product = mathUtils.multiply(5, 3);
console.log(`The product of 5 and 3 is: ${product}`);

const quotient = mathUtils.divide(5, 3);
console.log(`The quotient of 5 and 3 is: ${quotient}`);