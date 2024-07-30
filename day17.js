//Activity 1: Linked List
//Task 1:
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const node1 = new Node(10);
const node2 = new Node(20);
node1.next = node2;

console.log(node1.value);
console.log(node1.next.value);

//Task 2:
class Node2 {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addToEnd(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  removeFromEnd() {
    if (this.head === null) {
      return null;
    }
    if (this.head.next === null) {
      const value = this.head.value;
      this.head = null;
      return value;
    } else {
      let current = this.head;
      while (current.next.next !== null) {
        current = current.next;
      }
      const value = current.next.value;
      current.next = null;
      return value;
    }
  }

  displayAllNodes() {
    let current = this.head;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const linkedList = new LinkedList();
linkedList.addToEnd(10);
linkedList.addToEnd(20);
linkedList.addToEnd(30);
linkedList.displayAllNodes();

linkedList.removeFromEnd();
linkedList.displayAllNodes();

//Activity 2: Stack
//Task 3:
class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.items.length === 0) {
      return null;
    }
    return this.items.pop();
  }

  peek() {
    if (this.items.length === 0) {
      return null;
    }
    return this.items[this.items.length - 1];
  }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek());

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

//Task 4:
class Stack1 {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.items.length === 0) {
      return null;
    }
    return this.items.pop();
  }

  peek() {
    if (this.items.length === 0) {
      return null;
    }
    return this.items[this.items.length - 1];
  }
}

function reverseString(str) {
  const stack = new Stack();
  for (let char of str) {
    stack.push(char);
  }

  let reversedStr = "";
  while (stack.peek() !== null) {
    reversedStr += stack.pop();
  }

  return reversedStr;
}

const originalString = "hello";
const reversedString = reverseString(originalString);
console.log(reversedString);

//Activity 3: Queue
//Task 5:
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.items.length === 0) {
      return null;
    }
    return this.items.shift();
  }

  front() {
    if (this.items.length === 0) {
      return null;
    }
    return this.items[0];
  }
}

// Example usage:
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.front()); // Output: 10

console.log(queue.dequeue()); // Output: 10
console.log(queue.dequeue()); // Output: 20
console.log(queue.dequeue()); // Output: 30
console.log(queue.dequeue()); // Output: null (Queue is empty)

//Task 6:
class Queue1 {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.items.length === 0) {
      return null;
    }
    return this.items.shift();
  }

  front() {
    if (this.items.length === 0) {
      return null;
    }
    return this.items[0];
  }
}

class PrinterQueue {
  constructor() {
    this.queue = new Queue();
  }

  addJob(job) {
    this.queue.enqueue(job);
    console.log(`Added job: ${job}`);
  }

  processJob() {
    const job = this.queue.dequeue();
    if (job !== null) {
      console.log(`Processing job: ${job}`);
    } else {
      console.log("No jobs to process");
    }
  }
}

const printerQueue = new PrinterQueue();
printerQueue.addJob("Print document 1");
printerQueue.addJob("Print document 2");
printerQueue.addJob("Print document 3");

printerQueue.processJob();
printerQueue.processJob();
printerQueue.processJob();
printerQueue.processJob();

//Activty 4: Binary Tree
//Task 7:
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(15);

console.log(root.value);
console.log(root.left.value);
console.log(root.right.value);

//Task 8:
class TreeNode1 {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new TreeNode(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  inOrderTraversal(node) {
    if (node !== null) {
      this.inOrderTraversal(node.left);
      console.log(node.value);
      this.inOrderTraversal(node.right);
    }
  }

  display() {
    this.inOrderTraversal(this.root);
  }
}

const binaryTree = new BinaryTree();
binaryTree.insert(10);
binaryTree.insert(5);
binaryTree.insert(15);
binaryTree.insert(7);

binaryTree.display();

//Activity 5: Graph
//Task 9:
class Graph {
    constructor() {
      this.adjacencyList = new Map();
    }
  
    addVertex(vertex) {
      if (!this.adjacencyList.has(vertex)) {
        this.adjacencyList.set(vertex, []);
      }
    }
  
    addEdge(vertex1, vertex2) {
      this.adjacencyList.get(vertex1).push(vertex2);
      this.adjacencyList.get(vertex2).push(vertex1);
    }
  
    bfs(start) {
      const visited = new Set();
      const queue = [start];
  
      while (queue.length > 0) {
        const vertex = queue.shift();
        if (!visited.has(vertex)) {
          console.log(vertex);
          visited.add(vertex);
          const neighbors = this.adjacencyList.get(vertex);
          for (let neighbor of neighbors) {
            if (!visited.has(neighbor)) {
              queue.push(neighbor);
            }
          }
        }
      }
    }
  }
  
  const graph = new Graph();
  graph.addVertex('A');
  graph.addVertex('B');
  graph.addVertex('C');
  graph.addVertex('D');
  
  graph.addEdge('A', 'B');
  graph.addEdge('A', 'C');
  graph.addEdge('B', 'D');
  graph.addEdge('C', 'D');
  
  graph.bfs('A'); 
  
  //Task 10:
  class Graph1 {
    constructor() {
      this.adjacencyList = new Map();
    }
  
    addVertex(vertex) {
      if (!this.adjacencyList.has(vertex)) {
        this.adjacencyList.set(vertex, []);
      }
    }
  
    addEdge(vertex1, vertex2) {
      this.adjacencyList.get(vertex1).push(vertex2);
      this.adjacencyList.get(vertex2).push(vertex1);
    }
  
    bfsShortestPath(start, target) {
      const visited = new Set();
      const queue = [[start]];
      while (queue.length > 0) {
        const path = queue.shift();
        const vertex = path[path.length - 1];
        if (vertex === target) {
          return path;
        }
        if (!visited.has(vertex)) {
          visited.add(vertex);
          const neighbors = this.adjacencyList.get(vertex);
          for (let neighbor of neighbors) {
            const newPath = [...path, neighbor];
            queue.push(newPath);
          }
        }
      }
      return null;
    }
  }
  
  const graph1 = new Graph();
  graph1.addVertex('A');
  graph1.addVertex('B');
  graph1.addVertex('C');
  graph1.addVertex('D');
  
  graph1.addEdge('A', 'B');
  graph1.addEdge('A', 'C');
  graph1.addEdge('B', 'D');
  graph1.addEdge('C', 'D');
  
  const shortestPath = graph1.bfsShortestPath('A', 'D');
  console.log(shortestPath);