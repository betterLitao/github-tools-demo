console.log('Hello, GitHub Tools Demo!');

// This is a simple demo file to showcase file pushing to GitHub
function demoFunction() {
  return 'This is a demo function';
}

// Function to calculate the factorial of a number
function factorial(n) {
  if (n < 0) {
    throw new Error('Factorial is not defined for negative numbers');
  }
  
  if (n === 0 || n === 1) {
    return 1;
  }
  
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  
  return result;
}

// Function to check if a string is a palindrome
function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversed = cleaned.split('').reverse().join('');
  return cleaned === reversed;
}

// Function to generate Fibonacci sequence up to n terms
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

// New feature added in feature branch
function improvedFunction() {
  return 'This is an improved function with new features!';
}

module.exports = {
  demoFunction,
  improvedFunction,
  factorial,
  isPalindrome,
  fibonacci
};