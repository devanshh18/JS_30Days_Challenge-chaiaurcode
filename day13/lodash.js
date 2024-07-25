//Activity 4: Using third party modules
//Task 6:
import _ from "lodash";

const myArray = [1, 2, 3, 4, 5]

const reversedArray = _.reverse([...myArray])

console.log(`Original array: ${myArray}`);
console.log(`Reversed array: ${reversedArray}`);