const { greet } = require('../src/index');

describe('greet', () => {
  test('returns a greeting for a valid name', () => {
    expect(greet('World')).toBe('Hello, World!');
  });

  test('returns a greeting for another name', () => {
    expect(greet('Alice')).toBe('Hello, Alice!');
  });

  test('throws TypeError when name is empty string', () => {
    expect(() => greet('')).toThrow(TypeError);
  });

  test('throws TypeError when name is not a string', () => {
    expect(() => greet(42)).toThrow(TypeError);
  });

  test('throws TypeError when name is null', () => {
    expect(() => greet(null)).toThrow(TypeError);
  });
});
