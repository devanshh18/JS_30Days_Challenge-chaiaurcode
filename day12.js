//Activity 1: Basic Error Handling with Try-Catch
//Task 1:
const throwError = () => {
  throw new Error("Error thrown by function");
};

try {
  throwError();
} catch (error) {
  console.log("An error occured: ", error.message);
}

//Task 2:
const divideByTwo = (num1, num2) => {
  if (num2 == 0) {
    throw new Error("Denominator is zero");
  } else {
    return num1 / num2;
  }
};

try {
  divideByTwo(2, 0);
} catch (error) {
  console.log("An error occured: ", error.message);
}

//Activity 2: Finally block
//Task 3:
try {
  console.log("Insider the try block");
  throw new Error("Inside catch block");
} catch (error) {
  console.error("Caught an error:", error.message);
} finally {
  console.log("Finally block executed");
}

//Activity 3: Custom Error Objects
//Task 4:
class customError extends Error {
  constructor(message) {
    super(message);
    this.name = "customError";
  }
}

function throwingError() {
  throw new customError("This is a custom error");
}

try {
  throwingError();
} catch (error) {
  if (error instanceof customError) {
    console.error("Caught a custom error: ", error.message);
  } else {
    console.error("Caught an unexpected error:", error.message);
  }
}

//Task 5:
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function validateInput(input) {
  if (!input) {
    throw new ValidationError("Input cannot be empty");
  }
  console.log("Valid input: ", input);
}

try {
  validateInput("");
} catch (error) {
  if (error instanceof ValidationError) {
    console.error("Validation Error: ", error.message);
  } else {
    console.error("Unexpected Error: ", error.message);
  }
}

//Activity 4: Error Handling in Promises
//Task 6:
const randomPromise = new Promise((resolve, reject) => {
  const randomNumber = Math.random();
  if (randomNumber > 0.5) {
    resolve("Promise resolved successfully");
  } else {
    reject("Promise rejecrted successfully");
  }
});

randomPromise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error("ERROR: ", error);
  });

//Task 7:
async function randomProm() {
  try {
    const message = await randomPromise;
    console.log(message);
  } catch (error) {
    console.error("Caught an error:", error);
  }
}

randomProm();

//Activity 5: Graceful Error Handling in Fetch
//Task 8:
fetch("https://invalidUrl.com")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .catch((error) => {
    console.error(
      "There was a problem with your fetch operation: ",
      error.message
    );
  });

//Task 9:
async function invalidUrl() {
  try {
    const response = await fetch("https://invalidUrl.com");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    console.log(response.json());
  } catch (error) {
    console.error(
      "There was a problem with your fetch operation: ",
      error.message
    );
  }
}

invalidUrl();
