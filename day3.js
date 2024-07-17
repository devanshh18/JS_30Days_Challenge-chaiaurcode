//Activity - 1

//Task - 1
const num1 = 10;

if (num1 > 0) {
  console.log("Positive");
} else if (num1 < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

//Task - 2
const age = 19;

if (age >= 18) {
  console.log("Eligible to vote");
} else {
  console.log("Not eligible to vote");
}

//Activity - 2

//Task - 3
const num2 = 10;
const num3 = 20;
const num4 = 30;

if (num2 > num3 && num2 > num4) {
  console.log("Greater number is:" + num2);
} else if (num3 > num2 && num3 > num4) {
  console.log("Greater number is:" + num3);
} else {
  console.log("Greater number is:" + num4);
}

//Activity - 3

//Task - 4
const num5 = 3;

switch (num5) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
}

//Task - 5
const greade = "A";

switch (greade) {
  case "A":
    console.log("Excellent");
    break;
  case "B":
    console.log("Good");
    break;
  case "C":
    console.log("Average");
    break;
  case "D":
    console.log("Poor");
    break;
  default:
    console.log("Invalid grade");
    break;
}

//Activity - 4

//Task - 6
const num6 = 10;
console.log(num6 % 2 === 0 ? "Even" : "Odd");

// Activity - 5

//Task - 7
const year = 2020;

if (year % 4 === 0) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      console.log("Leap year");
    } else {
      console.log("Not a leap year");
    }
  } else {
    console.log("Leap year");
  }
} else {
  console.log("Not a leap year");
}