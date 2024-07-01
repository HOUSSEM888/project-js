
//String Manipulation Functions

// reverse a string 

function reverseString(str) {
    // Split the string into an array of characters, reverse the array, then join it back into a string
    return str.split('').reverse().join('');
}

console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString("12345")); // Output: "54321"

//Count Characters: Create a function that counts the number of characters in a string.
function countCharacters(str) {
    return str.length;
}
console.log(countCharacters("hello")); // Output: 5
console.log(countCharacters("12345")); // Output: 5

//Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence
function capitalizeWords(sentence) {
    // Split the sentence into words
    let words = sentence.split(' ');

    // Capitalize the first letter of each word
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    // Join the words back into a sentence
    return words.join(' ');
}
console.log(capitalizeWords("good morning")); // Output: "Hello World"
console.log(capitalizeWords("capitalize the first letter of each word")); // Output: "Capitalize The First Letter Of Each Word"

//Array Functions:

//Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.
function findMax(arr) {
    let max = arr[0]; // Assume first element is the maximum
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; // Update max if current element is larger
        }
    }
    return max;
}

function findMin(arr) {
    let min = arr[0]; // Assume first element is the minimum
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]; // Update min if current element is smaller

        }
    }
    return min;
}
console.log(findMax([1, 6, 3, 12, 0])); // Output: 12 (maximum value)
console.log(findMin([3, 7, -2, -8, 1])); // Output: -8 (minimum value)

//Sum of Array: Create a function that calculates the sum of all elements in an array.
function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}
console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15 (1 + 2 + 3 + 4 + 5)

//Filter Array: Implement a function that filters out elements from an array based on a given condition.

function filterStringsContaining(arr, substring) {
    return arr.filter(str => str.includes(substring));
}

let words = ["apple", "banana", "orange", "grapefruit", "kiwi"];
let filteredWords = filterStringsContaining(words, "an");
console.log(filteredWords); // Output: ["banana", "orange"]





//Mathematical Functions:

function factorial(n) {
    // Check if the input is a non-negative integer
    if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
        throw new Error('Input must be a non-negative integer.');
    }

    // Initialize result variable
    let result = 1;

    // Calculate factorial iteratively
    for (let i = 2; i <= n; i++) {
        result *= i;
    }

    return result;
}
console.log(factorial(0)); // Output: 1 (0! = 1)
console.log(factorial(1)); // Output: 1 (1! = 1)
console.log(factorial(5)); // Output: 120 (5! = 5 * 4 * 3 * 2 * 1 = 120)
console.log(factorial(10)); // Output: 3628800 (10! = 10 * 9 * 8 * ... * 1 = 3628800)

//Prime Number Check: Create a function to check if a number is prime or not.

function isPrime(n) {
    // Check if n is less than 2 (numbers less than 2 are not prime)
    if (n < 2) {
        return false;
    }

    // Check for divisibility from 2 to the square root of n
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false; // Found a divisor other than 1 and itself
        }
    }

    return true; // If no divisors other than 1 and itself, n is prime
}

console.log(isPrime(1));   // Output: false (1 is not prime)
console.log(isPrime(2));   // Output: true (2 is prime)
console.log(isPrime(7));   // Output: true (7 is prime)
console.log(isPrime(12));  // Output: false (12 is not prime)   



//Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net )

function generateFibonacci(n) {
    let fibSequence = [];
    
    if (n <= 0) {
        return fibSequence;
    } else if (n === 1) {
        fibSequence.push(0);
        return fibSequence;
    }
    
    fibSequence = [0, 1];
    
    while (fibSequence.length < n) {
        let prev1 = fibSequence[fibSequence.length - 1];
        let prev2 = fibSequence[fibSequence.length - 2];
        fibSequence.push(prev1 + prev2);
    }
    
    return fibSequence;
}

// Example 
let numTerms = 10; // Change this to the number of terms you want
let fibonacciSequence = generateFibonacci(numTerms);
console.log(`Fibonacci sequence with ${numTerms} terms:`, fibonacciSequence);