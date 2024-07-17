//Activity - 1
//Task - 1 to 5
let num1 = 10;
let num2 = 5;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);

//Activity - 2
//Task - 6,7
let num3 = 20;
num3 += num1;
console.log(num3);

num3 -= num1;
console.log(num3);

//Activity - 3

//Task - 8
let num4 = 20;
let num5 = 10;

if (num4 > num5) {
  console.log("Greater number is:" + num4);
} else {
  console.log("Greater number is:" + num5);
}

if (num4 < num5) {
  console.log("Lower number is:" + num4);
} else {
  console.log("Lower number is:" + num5);
}

//Task - 9
if (num4 <= num5) {
  console.log("Lower number is:" + num4);
} else {
  console.log("Lower number is:" + num5);
}

if (num4 >= num5) {
  console.log("Greater number is:" + num4);
} else {
  console.log("Greater number is:" + num5);
}

//Task - 10
let num6 = 10;
let num7 = "10";

if (num6 == num7) {
  console.log("Both Number are equal");
} else {
  console.log("Not equal");
}

if (num6 === num7) {
  console.log("Both Number are equal");
} else {
  console.log("Not equal");
}

// Activity - 4

//Task - 11
let num8 = 10;
let num9 = 15;

if (num8 < num9 && num8 == num6) {
  console.log("Both conditions are true");
} else {
  console.log("One of the condition is false");
}

//Task - 12
if (num8 > num9 || num8 == num6) {
  console.log("One of the condition is true");
} else {
  console.log("Both conditions are false");
}

//Task - 13
if (!(num8 > num9)) {
  console.log("Condition is true");
} else {
  console.log("Condition is false");
}

//Activity - 5

//Task - 14
let num10 = 10;
let num11 = 15;

console.log(
  num10 == num11 ? "Both numbers are equal" : "Both numbers are not equal"
);