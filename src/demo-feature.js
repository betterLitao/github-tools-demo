// This is a demo function for testing CodeRabbit AI code review functionality
/**
 * Calculates the total price for an array of items by summing each item's price multiplied by its quantity.
 * @param {Array<{price: number, quantity: number}>} items - The list of items to total.
 * @return {number} The total price of all items.
 */

function calculateTotalPrice(items) {
  // Using modern JavaScript features like reduce instead of for loop
  return items.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);
}

/**
 * Returns a display name for a user based on available first and last name properties.
 * If both names are missing, returns 'Anonymous'.
 * @param {Object} user - The user object, which may contain `firstName` and/or `lastName` properties.
 * @return {string} The constructed display name or 'Anonymous' if no names are present.
 */
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

/**
 * Returns a new array containing only items with `active` set to `true`.
 * @param {Array} items - The array of items to filter.
 * @return {Array} The filtered array of active items.
 */
function processItems(items) {
  // Using filter instead of for loop with push
  return items.filter(item => item.active === true);
}

/**
 * Formats a numeric amount as a localized currency string.
 * @param {number} amount - The monetary value to format.
 * @param {string} [currency='USD'] - The ISO 4217 currency code to use for formatting.
 * @return {string} The formatted currency string.
 */
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