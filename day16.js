//Activity 1: Basic Recursion
//Task 1:
const factorial = (n) => {
  if (n === 0) return 1;
  return n * factorial(n - 1);
};

console.log(factorial(3));
console.log(factorial(0));
console.log(factorial(10));
console.log(factorial(7));

//Task 2:
const fibonacci = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fibonacci(n - 1) + fibonacci(n - 2);
};

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));

//Activity 2: Rescursion with Arrays
//Task 3:
const arraySum = (arr) => {
  if (arr.length === 0) {
    return 0;
  } else {
    return arr[0] + arraySum(arr.slice(1));
  }
};

console.log(arraySum([1, 2, 3, 4]));
console.log(arraySum([12, 62, 30, 14]));
console.log(arraySum([11, 22, 33, 44]));

//Task 4:
const arrayMaximum = (arr) => {
  if (arr.length === 1) return arr[0];

  return arr[0] > arrayMaximum(arr.slice(1))
    ? arr[0]
    : arrayMaximum(arr.slice(1));
};

console.log(arrayMaximum([1, 2, 3, 4]));
console.log(arrayMaximum([51, 32, 43, 94]));
console.log(arrayMaximum([11, 222, 23, 104]));

//Activity 3: String manipulation with recursion
//Task 5:
const reverseString = (str) => {
  if (str.length <= 1) return str;

  return str.charAt(str.length - 1) + reverseString(str.slice(0, -1));
};

console.log(reverseString("hello"));
console.log(reverseString("world"));
console.log(reverseString("a"));
console.log(reverseString(""));

//Task 6:
const checkPalindrome = (str) => {
  if (str.length <= 1) return `String is Palindrome`;

  if (str[0] !== str.charAt(str.length - 1)) {
    return `String is not a Palindrome`;
  }

  return checkPalindrome(str.slice(1, -1));
};

console.log(checkPalindrome("level"));
console.log(checkPalindrome("hello"));
console.log(checkPalindrome("h"));
console.log(checkPalindrome(""));

//Actvity 4: Rescursive Search
//Task 7:
const binarySearch = (arr, target, left = 0, right = arr.length - 1) => {
  if (left > right) return -1;

  const mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) return mid;
  if (arr[mid] > target) return binarySearch(arr, target, left, mid - 1);
  return binarySearch(arr, target, mid + 1, right);
};

console.log(binarySearch([1, 2, 3, 4, 5], 3));
console.log(binarySearch([1, 2, 3, 4, 5], 1));
console.log(binarySearch([1, 2, 3, 4, 5], 5));
console.log(binarySearch([1, 2, 3, 4, 5], 6));
console.log(binarySearch([], 3));

//Task 8:
const countOccurrences = (arr, target) => {
  if (arr.length === 0) return 0;
  const count = arr[0] === target ? 1 : 0;
  return count + countOccurrences(arr.slice(1), target);
};
console.log(countOccurrences([1, 2, 3, 4, 5, 3, 3], 3));
console.log(countOccurrences([1, 2, 3, 4, 5], 1));
console.log(countOccurrences([1, 2, 3, 4, 5], 5));
console.log(countOccurrences([1, 2, 3, 4, 5], 6));
console.log(countOccurrences([], 3));
