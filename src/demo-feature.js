// This is a demo function for testing CodeRabbit AI code review functionality
// It contains some potential improvements that CodeRabbit might suggest

function calculateTotalPrice(items) {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total = total + items[i].price * items[i].quantity;
  }
  return total;
}

function getUserDisplayName(user) {
  if (user.firstName && user.lastName) {
    return user.firstName + ' ' + user.lastName;
  } else if (user.firstName) {
    return user.firstName;
  } else if (user.lastName) {
    return user.lastName;
  } else {
    return 'Anonymous';
  }
}

function processItems(items) {
  var results = [];
  for (var j = 0; j < items.length; j++) {
    if (items[j].active === true) {
      results.push(items[j]);
    }
  }
  return results;
}

module.exports = {
  calculateTotalPrice,
  getUserDisplayName,
  processItems
};