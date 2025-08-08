// Demo file to showcase the new features
const { factorial, isPalindrome, fibonacci } = require('./index');
const { generateId, deepClone, debounce } = require('./utils');

console.log('=== GitHub Tools Demo ===');

// Test factorial function
console.log('\n--- Factorial Function Tests ---');
console.log(`Factorial of 5: ${factorial(5)}`);
console.log(`Factorial of 0: ${factorial(0)}`);

// Test palindrome function
console.log('\n--- Palindrome Function Tests ---');
console.log(`Is "racecar" a palindrome? ${isPalindrome('racecar')}`);
console.log(`Is "hello" a palindrome? ${isPalindrome('hello')}`);
console.log(`Is "A man a plan a canal Panama" a palindrome? ${isPalindrome('A man a plan a canal Panama')}`);

// Test Fibonacci function
console.log('\n--- Fibonacci Function Tests ---');
console.log(`First 10 Fibonacci numbers: ${fibonacci(10).join(', ')}`);

// Test generateId function
console.log('\n--- Generate ID Function Tests ---');
console.log(`Random ID (default length): ${generateId()}`);
console.log(`Random ID (length 12): ${generateId(12)}`);

// Test deepClone function
console.log('\n--- Deep Clone Function Tests ---');
const originalObj = {
  name: 'Test Object',
  values: [1, 2, 3],
  nested: {
    deep: 'value'
  }
};

const clonedObj = deepClone(originalObj);
clonedObj.nested.deep = 'modified';

console.log('Original object nested value:', originalObj.nested.deep);
console.log('Cloned object nested value:', clonedObj.nested.deep);

// Test debounce function
console.log('\n--- Debounce Function Tests ---');
const debouncedFunction = debounce(() => {
  console.log('Debounced function executed!');
}, 1000);

console.log('Calling debounced function 3 times rapidly...');
debouncedFunction();
debouncedFunction();
debouncedFunction();
console.log('Debounced function will execute once after 1 second delay.');

console.log('\n=== Demo Complete ===');