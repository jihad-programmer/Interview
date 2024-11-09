// step 1 : ES6 (10 questions)

// queston 2

function logProperties(obj) {
    const { name, age } = obj;  // Getting name and age from object
    console.log(name, age);
  }
  
  logProperties({ name: "John", age: 30 });  // Output: John 30


  //question 4

  const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const mergedArr = [...arr1, ...arr2]; // Merges both arrays
console.log(mergedArr); // Output: [1, 2, 3, 4, 5, 6]


// question 7

let dictionary = new Map();
dictionary.set("apple", "A fruit");
dictionary.set("dog", "A pet animal");

console.log(dictionary.get("apple")); // Output: A fruit


// question 9

// Create a promise that resolves after 2 seconds
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise resolved after 2 seconds!");
    }, 2000);
  });
  
  // Using .then() to handle the resolved promise
  myPromise
    .then(message => {
      console.log(message); // Logs: Promise resolved after 2 seconds!
    })
    .catch(error => {
      console.log(error); // If the promise fails, it will log the error
    });
  

    // step 2: DOM (8 questions)

    // QUESTION 2

    const button = document.getElementById('colorButton');
        const div = document.getElementById('colorDiv');

        button.addEventListener('click', function() {
            div.style.backgroundColor = div.style.backgroundColor === 'lightblue' ? 'lightcoral' : 'lightblue';
        });