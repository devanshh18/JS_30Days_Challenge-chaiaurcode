//Activity 1: Sorting algorithms
//Task 1:
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

const array1 = [5, 3, 8, 4, 2];
console.log(bubbleSort(array1));

//Task2:
function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}

const array2 = [5, 3, 8, 4, 2];
console.log(selectionSort(array2));

//Task 3:
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

const array3 = [5, 3, 8, 4, 2];
console.log(quickSort(array3));

//Activity 2:
//Task 4:
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

const array4 = [5, 3, 8, 4, 2];
console.log(linearSearch(array4, 4));
console.log(linearSearch(array4, 6));

//Task 5:
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

const array5 = [2, 3, 4, 5, 8];
console.log(binarySearch(array5, 4));
console.log(binarySearch(array5, 6));

//Activity 3: String algorithms
//Task 6:
function countCharacters(str) {
  const charCount = {};
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  return charCount;
}

const string1 = "hello";
console.log(countCharacters(string1));

//Task 7:
function longestUniqueSubstring(str) {
  let maxLength = 0;
  let start = 0;
  const charIndex = {};

  for (let end = 0; end < str.length; end++) {
    const char = str[end];
    if (charIndex[char] !== undefined && charIndex[char] >= start) {
      start = charIndex[char] + 1;
    }
    charIndex[char] = end;
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

const string2 = "abcabcbb";
console.log(longestUniqueSubstring(string2));

//Activity 4: Array algorithms
//Task 8:
function rotateArray(arr, k) {
  k = k % arr.length;
  return arr.slice(-k).concat(arr.slice(0, -k));
}

const array6 = [1, 2, 3, 4, 5];
console.log(rotateArray(array6, 2));

//Task 9:
function mergeSortedArrays(arr1, arr2) {
  let mergedArray = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }

  return mergedArray;
}

const array7 = [1, 3, 5];
const array8 = [2, 4, 6];
console.log(mergeSortedArrays(array7, array8));

//Activty 5: Dynamic programming
//Task 10:
function fibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib.slice(0, n + 1);
}

console.log(fibonacci(7));

//Task 11:
function knapsack(values, weights, capacity) {
  const n = values.length;
  const dp = Array(n + 1)
    .fill()
    .map(() => Array(capacity + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let w = 1; w <= capacity; w++) {
      if (weights[i - 1] <= w) {
        dp[i][w] = Math.max(
          dp[i - 1][w],
          dp[i - 1][w - weights[i - 1]] + values[i - 1]
        );
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  return dp[n][capacity];
}

const values = [60, 100, 120];
const weights = [10, 20, 30];
const capacity = 50;
console.log(knapsack(values, weights, capacity));
