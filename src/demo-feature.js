// This is a demo function for testing CodeRabbit AI code review functionality
// It contains some potential improvements that CodeRabbit might suggest

function calculateTotalPrice(items) {
  // Using modern JavaScript features like reduce instead of for loop
  return items.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);
}

function getUserDisplayName(user) {
  // Simplified with nullish coalescing and optional chaining
  const firstName = user?.firstName ?? '';
  const lastName = user?.lastName ?? '';
  
  if (firstName && lastName) {
    return `${firstName} ${lastName}`;
  } else if (firstName) {
    return firstName;
  } else if (lastName) {
    return lastName;
  } else {
    return 'Anonymous';
  }
}

function processItems(items) {
  // Using filter instead of for loop with push
  return items.filter(item => item.active === true);
}

// New function to demonstrate additional changes
function formatCurrency(amount, currency = 'USD') {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency
  }).format(amount);
}

module.exports = {
  calculateTotalPrice,
  getUserDisplayName,
  processItems,
  formatCurrency
};