     // step 1

// question 7

const name = "Hablu";
const greeting = `Hello, ${name}!`;


// question 8
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2); // Doubles each number
console.log(doubled); // Output: [2, 4, 6, 8]

// question 10

(function() {
    const message = "Hello, world!";
    console.log(message); // Prints "Hello, world!"
  })();
  
  // console.log(message); // Error: message is not defined
  

// step 2

//question 5

const original1 = { name: "Rahim", age: 25 };
const shallowCopy = { ...original }; // Shallow copy

const original2 = { name: "karim", details: { age: 25 } };
const deepCopy = JSON.parse(JSON.stringify(original)); // Deep copy


// question 6

const greetAlice = greet.bind(person);
greetAlice(); // Hello, Alice

function greet(greeting) {
     console.log(`${greeting}, ${this.name}`);
   }
   greet.apply(person, ["Hi"]); // Hi, Alice

   function greet() {
     console.log(`Hello, ${this.name}`);
   }
   const person = { name: "Alice" };
   greet.call(person); // Hello, Alice
   
