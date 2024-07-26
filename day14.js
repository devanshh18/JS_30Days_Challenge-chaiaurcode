//Activity 1: Class definition
//Task 1:
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello my name is ${this.name} and I am ${this.age} years old.`;
  }
  //Task 2:
  updateAge(age) {
    this.age = age;
    console.log(`Updated age: ${this.age}`);
  }
}

const person = new Person("Harry Brook", 28);

console.log(person.greet());

//Task 2:
person.updateAge(20);

//Activity 2:
//Task 3:
class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
  }

  getStudentId() {
    return this.studentId;
  }
  //Task 4:
  greet() {
    return `Hello my name is ${this.name}, I am ${this.age} years old and my student ID is ${this.studentId}`;
  }
}

const student = new Student("Lary", 16, 212);

console.log(student.getStudentId());
console.log(student.greet()); //Task 4

//Activity 3:
//Task 5:
class Person1 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static genericGreet() {
    return "Hello, this is a generic greeting message.";
  }
}

console.log(Person1.genericGreet());

//Task 6:
class Student1 extends Person1 {
  static studentCount = 0;

  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
    Student1.studentCount++;
  }

  static getStudentCount() {
    return `Total number of students: ${Student1.studentCount}`;
  }
}

const student1 = new Student1("John", 23, 234);
const student2 = new Student1("Glen", 46, 521);
const student3 = new Student1("Larry", 33, 215);

console.log(Student1.getStudentCount());

//Activity 4: Getters and Setters
//Task 7:
class Person2 {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  //Task 8:
  set fullName(name) {
    const [firstName, lastName] = name.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const person2 = new Person2("Devansh", "Patil");

console.log(person2.fullName);

person2.fullName = "Darren Watkins"; //Task 8:

console.log(person2.fullName);

//Activty 5: Private Fields
//Task 9 and 10:
class Account {
  #balance;

  constructor(initialBalance = 0) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited: ${amount}. New balance: ${this.#balance}`);
    } else {
      console.log("Deposit amount must be positive.");
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdrew: ${amount}. New balance: ${this.#balance}`);
    } else if (amount > this.#balance) {
      console.log("Insufficient balance.");
    } else {
      console.log("Withdrawal amount must be positive.");
    }
  }

  getBalance() {
    return this.#balance;
  }
}

const myAccount = new Account(100);

myAccount.deposit(50);

myAccount.withdraw(30);

myAccount.withdraw(150);

console.log(`Current balance: ${myAccount.getBalance()}`);
