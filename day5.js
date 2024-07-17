//Activity 1: Function Declaration
//Task 1:
function oddOrEven(n) {
  if (n % 2 == 0) {
    console.log("Number is even");
  } else {
    console.log("Number is odd");
  }
}

oddOrEven(59);

//Task 2:
function sqaure(n) {
  return n * n;
}

console.log(sqaure(10));

//Activity 2: Function Expression
//Task 3:
function maxofTwoNums(num1, num2) {
  if (num1 > num2) {
    console.log(`${num1} is greater than ${num2}`);
  } else {
    console.log(`${num2} is greater than ${num1}`);
  }
}

maxofTwoNums(20, 5);

//Task 4:
function concatString(str1, str2) {
  return str1 + str2;
}

console.log(concatString("Devansh", " Patil"));

//Activity 3: Arrow Functions
//Task 5:
const sumofTwoNums = (num1, num2) => {
  return `Sum of ${num1} and ${num2} is ${num1 + num2}`;
};

console.log(sumofTwoNums(15, 5));

//Task 6:
const checkCharacter = (str3, char) => {
  for (let i = 0; i < str3.length; i++) {
    if (str3[i] === char) {
      return true;
    }
  }
  return false;
};

console.log(checkCharacter("Devansh", "e"));

//Activity 4: Function Parameters and Default Values
//Task 7:
const productofTwoNums = (num3, num4 = 1) => {
  return num3 * num4;
};

console.log(productofTwoNums(2, 5));
console.log(productofTwoNums(2));

//Task 8:
const greet = (name, age = 18) => {
  let message = `Hello ${name} you are now ${age} years old!`;
  return message;
};

console.log(greet("Devansh", 20));
console.log(greet("Dev"));

//Activity 5:
//Task 9:
const callFunctions = (func1, func2, n) => {
  for (let i = 0; i < n; i++) {
    func1();
    func2();
  }
};

const sayName = () => {
  console.log("Devansh");
};

const sayAge = () => {
  console.log(20);
};

callFunctions(sayName, sayAge, 5);

//Task 10:
const applyFunction = (func1, func2, val) => {
  const result1 = func1(val);
  const result2 = func2(result1);
  return result2;
};

const double = (n) => {
  return n * 2;
};

const sqauree = (n) => {
  return n * n;
};

console.log(applyFunction(double, sqauree, 10));
