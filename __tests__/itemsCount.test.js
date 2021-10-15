import itemsCount from '../src/JSFunctions/itemsCount.js';

describe('Test itemsCount function', () => {
  document.body.innerHTML = `
  <span id='items-num'></span>
  `;
  test('should return 1', () => {
    expect(itemsCount()).toBe(1);
  });
  test('should return 2', () => {
    expect(itemsCount()).toBe(2);
  });
  test('should return 3', () => {
    expect(itemsCount()).toBe(3);
  });
  test('should return 4', () => {
    expect(itemsCount()).toBe(4);
  });
  test('should return 6', () => {
    itemsCount();
    expect(itemsCount()).toBe(6);
  });
});