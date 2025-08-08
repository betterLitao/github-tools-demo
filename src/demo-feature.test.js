// This is a demo function for testing CodeRabbit AI code review functionality
// It contains some potential improvements that CodeRabbit might suggest

const {
  calculateTotalPrice,
  getUserDisplayName,
  processItems,
  formatCurrency
} = require('./demo-feature');

describe('calculateTotalPrice', () => {
  test('should calculate total price for single item', () => {
    const items = [{ price: 10.50, quantity: 2 }];
    expect(calculateTotalPrice(items)).toBe(21);
  });

  test('should calculate total price for multiple items', () => {
    const items = [
      { price: 10.50, quantity: 2 },
      { price: 5.25, quantity: 3 },
      { price: 100, quantity: 1 }
    ];
    expect(calculateTotalPrice(items)).toBe(136.75);
  });

  test('should return 0 for empty items array', () => {
    expect(calculateTotalPrice([])).toBe(0);
  });

  test('should handle items with zero quantity', () => {
    const items = [
      { price: 10, quantity: 0 },
      { price: 20, quantity: 2 }
    ];
    expect(calculateTotalPrice(items)).toBe(40);
  });

  test('should handle items with zero price', () => {
    const items = [
      { price: 0, quantity: 5 },
      { price: 15, quantity: 1 }
    ];
    expect(calculateTotalPrice(items)).toBe(15);
  });

  test('should handle decimal calculations correctly', () => {
    const items = [{ price: 0.1, quantity: 3 }];
    expect(calculateTotalPrice(items)).toBeCloseTo(0.3);
  });

  test('should handle negative prices and quantities', () => {
    const items = [
      { price: -10, quantity: 2 },
      { price: 30, quantity: 1 }
    ];
    expect(calculateTotalPrice(items)).toBe(10);
  });

  test('should handle large numbers', () => {
    const items = [{ price: 999999.99, quantity: 1000 }];
    expect(calculateTotalPrice(items)).toBe(999999990);
  });

  test('should throw error for invalid input types', () => {
    expect(() => calculateTotalPrice(null)).toThrow();
    expect(() => calculateTotalPrice(undefined)).toThrow();
    expect(() => calculateTotalPrice("not an array")).toThrow();
  });

  test('should handle items missing price or quantity properties', () => {
    const items = [
      { price: 10 }, // missing quantity
      { quantity: 2 }, // missing price
      { price: 5, quantity: 1 } // valid
    ];
    // This will result in NaN for incomplete items, so total will be NaN
    expect(calculateTotalPrice(items)).toBeNaN();
  });
});

describe('getUserDisplayName', () => {
  test('should return full name when both firstName and lastName are provided', () => {
    const user = { firstName: 'John', lastName: 'Doe' };
    expect(getUserDisplayName(user)).toBe('John Doe');
  });

  test('should return firstName only when lastName is missing', () => {
    const user = { firstName: 'John' };
    expect(getUserDisplayName(user)).toBe('John');
  });

  test('should return lastName only when firstName is missing', () => {
    const user = { lastName: 'Doe' };
    expect(getUserDisplayName(user)).toBe('Doe');
  });

  test('should return Anonymous when both names are missing', () => {
    const user = {};
    expect(getUserDisplayName(user)).toBe('Anonymous');
  });

  test('should handle null user object', () => {
    expect(getUserDisplayName(null)).toBe('Anonymous');
  });

  test('should handle undefined user object', () => {
    expect(getUserDisplayName(undefined)).toBe('Anonymous');
  });

  test('should handle empty string names', () => {
    const user = { firstName: '', lastName: '' };
    expect(getUserDisplayName(user)).toBe('Anonymous');
  });

  test('should handle whitespace-only names', () => {
    const user = { firstName: '   ', lastName: '   ' };
    expect(getUserDisplayName(user)).toBe('       ');
  });

  test('should return firstName when lastName is empty string', () => {
    const user = { firstName: 'John', lastName: '' };
    expect(getUserDisplayName(user)).toBe('John');
  });

  test('should return lastName when firstName is empty string', () => {
    const user = { firstName: '', lastName: 'Doe' };
    expect(getUserDisplayName(user)).toBe('Doe');
  });

  test('should handle null values for names', () => {
    const user = { firstName: null, lastName: null };
    expect(getUserDisplayName(user)).toBe('Anonymous');
  });

  test('should handle undefined values for names', () => {
    const user = { firstName: undefined, lastName: undefined };
    expect(getUserDisplayName(user)).toBe('Anonymous');
  });

  test('should handle mixed null and undefined values', () => {
    const user = { firstName: null, lastName: undefined };
    expect(getUserDisplayName(user)).toBe('Anonymous');
  });

  test('should handle numeric values as names', () => {
    const user = { firstName: 123, lastName: 456 };
    expect(getUserDisplayName(user)).toBe('123 456');
  });

  test('should handle special characters in names', () => {
    const user = { firstName: 'Jean-Luc', lastName: "O'Connor" };
    expect(getUserDisplayName(user)).toBe("Jean-Luc O'Connor");
  });
});

describe('processItems', () => {
  test('should filter items that are active', () => {
    const items = [
      { id: 1, active: true, name: 'Item 1' },
      { id: 2, active: false, name: 'Item 2' },
      { id: 3, active: true, name: 'Item 3' }
    ];
    const result = processItems(items);
    expect(result).toHaveLength(2);
    expect(result[0].id).toBe(1);
    expect(result[1].id).toBe(3);
  });

  test('should return empty array when no items are active', () => {
    const items = [
      { id: 1, active: false, name: 'Item 1' },
      { id: 2, active: false, name: 'Item 2' }
    ];
    expect(processItems(items)).toEqual([]);
  });

  test('should return all items when all are active', () => {
    const items = [
      { id: 1, active: true, name: 'Item 1' },
      { id: 2, active: true, name: 'Item 2' }
    ];
    const result = processItems(items);
    expect(result).toHaveLength(2);
    expect(result).toEqual(items);
  });

  test('should return empty array for empty input', () => {
    expect(processItems([])).toEqual([]);
  });

  test('should handle items without active property', () => {
    const items = [
      { id: 1, name: 'Item 1' }, // no active property
      { id: 2, active: true, name: 'Item 2' }
    ];
    const result = processItems(items);
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe(2);
  });

  test('should handle items with active as non-boolean values', () => {
    const items = [
      { id: 1, active: 1, name: 'Item 1' }, // truthy but not true
      { id: 2, active: 'true', name: 'Item 2' }, // truthy but not true
      { id: 3, active: true, name: 'Item 3' }, // actually true
      { id: 4, active: 0, name: 'Item 4' }, // falsy
      { id: 5, active: null, name: 'Item 5' } // falsy
    ];
    const result = processItems(items);
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe(3);
  });

  test('should throw error for non-array input', () => {
    expect(() => processItems(null)).toThrow();
    expect(() => processItems(undefined)).toThrow();
    expect(() => processItems("not an array")).toThrow();
    expect(() => processItems({})).toThrow();
  });

  test('should not modify original array', () => {
    const originalItems = [
      { id: 1, active: true, name: 'Item 1' },
      { id: 2, active: false, name: 'Item 2' }
    ];
    const itemsCopy = [...originalItems];
    processItems(originalItems);
    expect(originalItems).toEqual(itemsCopy);
  });
});

describe('formatCurrency', () => {
  test('should format USD currency by default', () => {
    expect(formatCurrency(1234.56)).toBe('$1,234.56');
  });

  test('should format different currencies', () => {
    expect(formatCurrency(1234.56, 'EUR')).toMatch(/€1,234.56|1,234.56\s?€/);
    expect(formatCurrency(1234.56, 'GBP')).toBe('£1,234.56');
    expect(formatCurrency(1234.56, 'JPY')).toBe('¥1,235');
  });

  test('should handle zero amount', () => {
    expect(formatCurrency(0)).toBe('$0.00');
  });

  test('should handle negative amounts', () => {
    expect(formatCurrency(-1234.56)).toBe('-$1,234.56');
  });

  test('should handle very small amounts', () => {
    expect(formatCurrency(0.01)).toBe('$0.01');
    expect(formatCurrency(0.001)).toBe('$0.00');
  });

  test('should handle very large amounts', () => {
    expect(formatCurrency(1234567890.12)).toBe('$1,234,567,890.12');
  });

  test('should handle decimal precision correctly', () => {
    expect(formatCurrency(10.999)).toBe('$11.00');
    expect(formatCurrency(10.001)).toBe('$10.00');
  });

  test('should throw error for invalid currency codes', () => {
    expect(() => formatCurrency(100, 'INVALID')).toThrow();
    expect(() => formatCurrency(100, 'XYZ')).toThrow();
  });

  test('should handle string numbers', () => {
    expect(formatCurrency('1234.56')).toBe('$1,234.56');
    expect(formatCurrency('0')).toBe('$0.00');
  });

  test('should handle invalid amount types', () => {
    expect(() => formatCurrency(null)).toThrow();
    expect(() => formatCurrency(undefined)).toThrow();
    expect(() => formatCurrency('not a number')).toThrow();
    expect(() => formatCurrency({})).toThrow();
    expect(() => formatCurrency([])).toThrow();
  });

  test('should handle edge case currencies', () => {
    // Test currencies with different decimal places
    expect(formatCurrency(100, 'BHD')).toMatch(/100.000/); // 3 decimal places
    expect(formatCurrency(100, 'CLF')).toMatch(/100.0000/); // 4 decimal places
  });

  test('should handle Infinity and NaN', () => {
    expect(() => formatCurrency(Infinity)).toThrow();
    expect(() => formatCurrency(-Infinity)).toThrow();
    expect(() => formatCurrency(NaN)).toThrow();
  });
});

// Integration tests
describe('Integration Tests', () => {
  test('should calculate total price and format as currency', () => {
    const items = [
      { price: 10.50, quantity: 2 },
      { price: 5.25, quantity: 3 }
    ];
    const total = calculateTotalPrice(items);
    const formatted = formatCurrency(total);
    expect(formatted).toBe('$36.75');
  });

  test('should process active items and calculate their total price', () => {
    const items = [
      { price: 10, quantity: 1, active: true },
      { price: 20, quantity: 1, active: false },
      { price: 15, quantity: 2, active: true }
    ];
    const activeItems = processItems(items);
    const total = calculateTotalPrice(activeItems);
    expect(total).toBe(40);
  });

  test('should handle complete user workflow', () => {
    const user = { firstName: 'John', lastName: 'Doe' };
    const items = [
      { price: 25.99, quantity: 2, active: true },
      { price: 10.50, quantity: 1, active: false }
    ];
    
    const displayName = getUserDisplayName(user);
    const activeItems = processItems(items);
    const total = calculateTotalPrice(activeItems);
    const formattedTotal = formatCurrency(total);
    
    expect(displayName).toBe('John Doe');
    expect(activeItems).toHaveLength(1);
    expect(total).toBe(51.98);
    expect(formattedTotal).toBe('$51.98');
  });
});