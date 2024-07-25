// Activity 1: Understanding Promises
// Task 1:
const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello from task 1");
  }, 2000);
});

promiseOne.then((message) => {
  console.log(message);
});

//Task 2:
const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("ERROR: This is an error message from task 2");
  }, 2000);
});

promiseTwo.catch((message) => {
  console.log(message);
});

//Activity 2:  Chaining Promises
//Task 3:
const fetchData = (message, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(message);
    }, delay);
  });
};

fetchData("First data fetched", 1000)
  .then((message) => {
    console.log(message);
    return fetchData("Second data fetched", 500);
  })
  .then((message) => {
    console.log(message);
    return fetchData("Third data fetched", 200);
  })
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error("Unabled to fetch data", error);
  });

//Activity 3: Using Async/Await
//Task 4:
async function waitForPromise() {
  const resolvedValue = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise is resolved");
    }, 2000);
  });
  console.log(resolvedValue);
}

waitForPromise();

//Task 5:
async function rejectedPromise() {
  try {
    const resolvedValue = await new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("Promise is rejected");
      }, 2000);
    });
    console.log(resolvedValue);
  } catch (error) {
    console.error("ERROR:", error);
  }
}

rejectedPromise();

//Activity 4: Fetching Data from an API
//Task 6:
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("ERROR: ", error);
  });

//Task 7:
async function fetchResponse() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/useers");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchResponse();

//Activity 5: Concurrent Promises
//Task 8:
const prom1 = fetch("https://jsonplaceholder.typicode.com/posts/1").then(
  (response) => response.json()
);
const prom2 = fetch("https://jsonplaceholder.typicode.com/posts/2").then(
  (response) => response.json()
);
const prom3 = fetch("https://jsonplaceholder.typicode.com/posts/3").then(
  (response) => response.json()
);
const prom4 = fetch("https://jsonplaceholder.typicode.com/posts/4").then(
  (response) => response.json()
);

Promise.all([prom1, prom2, prom3, prom4])
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.log(error);
  });

//Task 9:
Promise.race([prom1, prom2, prom3, prom4])
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.error(error);
  });
