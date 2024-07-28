//Activity 1: Understanding Closures
//Task 1:
const outerFunction = () => {
  let a = 5,
    b = 10;
  const innerFunction = () => {
    return a + b;
  };

  return innerFunction;
};

const inner = outerFunction();

console.log(inner());

//Task 2:
const createCounter = () => {
  let count = 0;

  return {
    increment: function () {
      count++;
    },
    getValue: function () {
      return count;
    },
  };
};

const counter = createCounter();

counter.increment();
console.log(counter.getValue());

counter.increment();
console.log(counter.getValue());

//Activity 2: Practical Closures
//Task 3:
const uniqueId = () => {
  let id = 0;
  return function () {
    id++;
    return id;
  };
};

const generateID = uniqueId();

console.log(generateID());
console.log(generateID());
console.log(generateID());
console.log(generateID());

//Task 4:
const createGreet = (name) => {
  return function () {
    return `Hello, ${name}`;
  };
};

const greet = createGreet("Darren");
console.log(greet());

//Activity 3: Closures in Loops
//Task 5:
const createFunctionArray = (n) => {
  let functionArray = [];

  for (let i = 0; i < n; i++) {
    functionArray.push(
      (function (index) {
        return function () {
          console.log(index);
        };
      })(i)
    );
  }

  return functionArray;
};

const functions = createFunctionArray(5);

functions[0]();
functions[1]();
functions[2]();
functions[3]();
functions[4]();
// functions[5](); //will throw error

//Activity 4: Module Pattern
//Task 6:
function createItemManager() {
  let items = []; // Private array to store items

  return {
    addItem: function (item) {
      items.push(item);
      console.log(`${item} added.`);
    },
    removeItem: function (item) {
      const index = items.indexOf(item);
      if (index !== -1) {
        items.splice(index, 1);
        console.log(`${item} removed.`);
      } else {
        console.log(`${item} not found.`);
      }
    },
    listItems: function () {
      if (items.length === 0) {
        console.log("No items.");
      } else {
        console.log("Items:", items.join(", "));
      }
    },
  };
}

const itemManager = createItemManager();

itemManager.addItem("Apple");
itemManager.addItem("Banana");
itemManager.listItems();
itemManager.removeItem("Apple");
itemManager.listItems();
itemManager.removeItem("Orange");
itemManager.listItems();

//Activity 5: Memoization
//Task 7:
const memoize = (fn) => {
  const cache = {};

  return (...args) => {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    } else {
      const result = fn(...args);
      cache[key] = result;
      return result;
    }
  };
};

const slowFunction = (num) => {
  for (let i = 0; i < 1e6; i++) {}
  return num * 2;
};

const memoizedSlowFunction = memoize(slowFunction);

console.log(memoizedSlowFunction(5));
console.log(memoizedSlowFunction(5));
console.log(memoizedSlowFunction(10));
console.log(memoizedSlowFunction(10));

//Task 8:
const memoizee = (fn) => {
  const cache = {};

  return (...args) => {
    const key = JSON.stringify(args);

    if (cache[key]) {
      console.log("Fetching from cache:", key);
      return cache[key];
    }

    console.log("Calculating result for:", key);
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
};

const factorial = (n) => {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
};

const memoizedFactorial = memoizee(factorial);

console.log(memoizedFactorial(5));
console.log(memoizedFactorial(5));
console.log(memoizedFactorial(6));
console.log(memoizedFactorial(6));
console.log(memoizedFactorial(4));
console.log(memoizedFactorial(4));
