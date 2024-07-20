//Activity 1: Template literals
//Task 1:
let personName = "Devansh"
let personAge = 20;

console.log(`Person's name is ${personName} and age is ${personAge}`);

//Task 2:
let multilineString = `
This is a multiline string
using template literals.
It can span multiple lines
without the need for escape characters.
`;

console.log(multilineString);


//Activity 2: Destructing
//Task 3: 
let arr = [1, 3, 5, 8]

let[first, second] = arr;

console.log(first, second);

//Task 4:
let book = {
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    year: 2008
};

let { title, author } = book;

console.log(title, author);


//Activity 3: Spread and Rest operators
//Task 5:
let arr1 = [2, 4, 6, 8, 10]

let arr2 = [...arr1, 12, 14]

console.log(arr2);

//Task 6:
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(2, 4, 6, 8, 10, 12, 14)); // Output: 56


//Activity 4: Default Parameters
//Task 7:
function product(num, n = 1) {
    return num * n;
}

console.log(product(24));
console.log(product(24, 45));


//Activity 5: Enhanced Object Literals
//Task 8:
let firstName = "Devansh";
let lastName = "Patil";
let age = 20;

let person = {
    firstName,
    lastName,
    age,
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    greet() {
        console.log(`Hello, my name is ${this.fullName()} and I am ${this.age} years old.`);
    }
};

console.log(person);

console.log(person.fullName()); 
person.greet(); 

//Task 9:
let propName = "age";

let Person = {
    name: "Devansh",
    [propName]: 20
};

console.log(Person);