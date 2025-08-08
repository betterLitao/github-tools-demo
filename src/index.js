console.log('Hello, GitHub Tools Demo!');

// This is a simple demo file to showcase file pushing to GitHub
function demoFunction() {
  return 'This is a demo function';
}

/**
 * Calculates the factorial of a non-negative integer.
 * @param {number} n - The number for which to compute the factorial. Must be non-negative.
 * @return {number} The factorial of the input number.
 * @throws {Error} If the input is a negative number.
 */
function factorial(n) {
  if (n < 0) {
    throw new Error('Factorial is not defined for negative numbers');
  }
  
  if (n === 0 || n === 1) {
    return 1;
  }
  
  // Using recursive approach for better readability
  return n * factorial(n - 1);
}

// Function to check if a string is a palindrome
function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversed = cleaned.split('').reverse().join('');
  return cleaned === reversed;
}

/**
 * Generates the Fibonacci sequence as an array containing the first `n` terms.
 * @param {number} n - The number of terms to generate.
 * @return {number[]} An array of the first `n` Fibonacci numbers.
 */
function fibonacci(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];
  
  const sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }
  
  return sequence;
}

/**
 * Calculates the greatest common divisor (GCD) of two integers using the Euclidean algorithm.
 * @param {number} a - The first integer.
 * @param {number} b - The second integer.
 * @return {number} The greatest common divisor of `a` and `b`.
 */
function gcd(a, b) {
  // Using Euclidean algorithm
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return Math.abs(a);
}

/**
 * Determines whether a given integer is a prime number.
 * @param {number} num - The integer to check for primality.
 * @return {boolean} True if the number is prime; otherwise, false.
 */
function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  
  // Check using 6k±1 optimization
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  }
  return true;
}

/**
 * Returns a message indicating the function includes new features.
 * @return {string} A string stating the function is improved with new features.
 */
function improvedFunction() {
  return 'This is an improved function with new features!';
}

module.exports = {
  demoFunction,
  improvedFunction,
  factorial,
  isPalindrome,
  fibonacci,
  gcd,
  isPrime
};