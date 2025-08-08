// Demo file to showcase the new features
const { factorial, isPalindrome, fibonacci, gcd, isPrime } = require('./index');
const { generateId, deepClone, debounce, throttle } = require('./utils');

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

// Test GCD function
console.log('\n--- Greatest Common Divisor Tests ---');
console.log(`GCD of 48 and 18: ${gcd(48, 18)}`);
console.log(`GCD of 100 and 25: ${gcd(100, 25)}`);
console.log(`GCD of 17 and 13: ${gcd(17, 13)}`);

// Test Prime function
console.log('\n--- Prime Number Tests ---');
console.log(`Is 17 a prime number? ${isPrime(17)}`);
console.log(`Is 25 a prime number? ${isPrime(25)}`);
console.log(`Is 97 a prime number? ${isPrime(97)}`);

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

// Test throttle function
console.log('\n--- Throttle Function Tests ---');
const throttledFunction = throttle(() => {
  console.log('Throttled function executed at:', new Date().toISOString());
}, 2000); // 2 second limit

console.log('Calling throttled function 5 times rapidly...');
for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    throttledFunction();
  }, i * 500); // Call every 500ms
}

console.log('\n=== Demo Complete ===');