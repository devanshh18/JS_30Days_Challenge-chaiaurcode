
//Activity 1: For Loop

//Task 1: Write a program to print numbers from 1 to 10 using a for loop.
for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
  
  //Task 2: Write a program to print the multiplication table of 5 using a for loop.
  for (let i = 1; i <= 10; i++) {
    console.log(`5 * ${i} = ${5 * i}`);
  }
  
  //Activity 2: While Loop
  
  //Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
  let sum = 0;
  let i = 1;
  
  while (i <= 10) {
    sum += i;
    i++;
  }
  
  console.log(sum);
  
  //Task 4: Write a program to print numbers from 10 to 1 using a while loop.
  let num = 10;
  
  while (num <= 10 && num > 0) {
    console.log(num);
    num--;
  }
  
  //Activity 3: Do...While Loop
  
  //Task 5: Write a program to point numbers from 1 to 5 using a do...while loop.
  let num1 = 1;
  
  do {
    console.log(num1);
    num1++;
  } while (num1 <= 5);
  
  //Task 6: Write a program to calculate the factorial of a number using a do...while loop.
  let num2 = 5;
  let factorial = 1;
  
  do {
    factorial = factorial * num2;
    num2--;
  } while (num2 > 0);
  
  console.log(`Factorial of 5 is: ${factorial}`);
  
  //Activity 4: Nested Loops
  
  //Task 7: Write a program to print a pattern using nested for loops.
  
  for (let i = 0; i < 5; i++) {
    let pattern = "";
    for (let j = 0; j <= i; j++) {
      pattern += "*";
    }
    console.log(pattern);
  }
  
  //Activity 5: Loop Control Statements
  
  //Task 8: Write a program to print numbers from 1 to  10 using a for loop. But skip the number 5.
  for (let i = 1; i <= 10; i++) {
    if (i === 5) {
      continue;
    }
    console.log(i);
  }
  
  //Task 9: Write a program to print numbers from 1 to 10 using a for loop. But break the loop if the number is 7 using the break statement.
  for (let i = 1; i <= 10; i++) {
    if (i === 7) {
      break;
    }
    console.log(i);
  }
  