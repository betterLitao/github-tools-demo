# GitHub Tools Demo

This is a demo repository to showcase how to use GitHub tools.

## Features

- Creating repositories
- Pushing files
- Creating issues
- Creating pull requests
- Testing CodeRabbit AI and changeset-bot integrations

## New Functions Added

### Mathematical Functions (in `src/index.js`)
- `factorial(n)`: Calculate the factorial of a number
- `isPalindrome(str)`: Check if a string is a palindrome
- `fibonacci(n)`: Generate a Fibonacci sequence with n terms

### Utility Functions (in `src/utils.js`)
- `generateId(length)`: Generate a random ID with specified length
- `deepClone(obj)`: Create a deep clone of an object
- `debounce(func, delay)`: Debounce a function execution

### Demo File
- `src/demo.js`: Demonstrates the usage of all new functions

## GitHub PR Reference Example

This repository also demonstrates how to reference Pull Requests in commit messages. When you include `Ref: #<PR_NUMBER>` in your commit message, GitHub will show "added a commit that referenced this pull request" in the PR timeline.

For example, see the commit [c94e621](https://github.com/betterLitao/github-tools-demo/commit/c94e621687673720b372eeb5247d6ef924686856) which references [PR #6](https://github.com/betterLitao/github-tools-demo/pull/6).

## Usage

This repository demonstrates the basic usage of GitHub tools available in this environment. You can run the demo with:

```bash
node src/demo.js
```

## Testing GitHub Integrations

This repository is also used to test GitHub integrations like CodeRabbit AI and changeset-bot.