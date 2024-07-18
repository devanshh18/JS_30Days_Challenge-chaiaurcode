//Activity 1: Array Creation and Access
//Task 1:
const arr = [1, 2, 3, 4, 5];
console.log(arr);

//Task 2:
const arr2 = [6, 7, 8, 9, 10];

console.log(`First element : ${arr2[0]}`);
console.log(`Last element: ${arr2[arr2.length - 1]}`);

//Activity 2: Array Methods (Basic)
//Task 3:
const arr3 = [2, 4, 6, 8];
console.log(`Current Array: ${arr3}`);

arr3.push(10);
console.log(`Updated Array: ${arr3}`);

//Task 4:
const arr4 = [1, 3, 5, 7, 8];
console.log(`Current Array: ${arr4}`);

arr4.pop();
console.log(`Updated Array: ${arr4}`);

//Task 5:
const arr5 = [0, 1, 2, 3, 5, 6, 7, 8, 9, 10];
console.log(`Current Array: ${arr5}`);

arr5.shift();
console.log(`Updated Array: ${arr5}`);

//Task 6:
const arr6 = [2, 3, 4, 5];
console.log(`Current Array: ${arr6}`);

arr6.unshift(1);
console.log(`Updated Array: ${arr6}`);

//Activity 3: Array Methods (Intermediate)
//Task 7:
const arr7 = [1, 2, 3, 4, 5];
console.log(`Current Array: ${arr7}`);

const double = (n) => {
  return n * 2;
};

console.log(`New Array: ${arr7.map(double)}`);

//Task 8:
const arr8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`Current Array: ${arr8}`);

// const evenNumbers = (n) => {
//   return n % 2 == 0;
// };

console.log(`New Array: ${arr8.filter(n => n % 2 === 0)}`);

//Task 9:
const arr9 = [1, 2, 3, 4, 5];
console.log(`Current Array: ${arr9}`);

const sumOfNumbers = arr9.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0)

console.log(sumOfNumbers);

//Activity 4: Array Iteration
//Task 10:
const arr10 = [1, 3, 5, 7, 9]

for(let i = 0; i <arr10.length; i++) {
    console.log(arr10[i]);
}

//Task 11:
const arr11 = [1, 3, 3, 5, 6, 10]

arr11.forEach(element => {
    console.log(element);
});

//Activity 5: Multi-dimensional Arrays
//Task 12:
const arr12 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

console.log(arr12);

//Task 13:
const arr13 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

console.log(arr13[1][0]);