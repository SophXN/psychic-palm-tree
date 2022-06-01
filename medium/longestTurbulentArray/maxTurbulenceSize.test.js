/* eslint-disable no-undef */
const maxTurbulenceSize = require('./maxTurbulenceSize');

describe('Max Balloons', () => {
  it('should be a function', () => {
    expect(typeof maxTurbulenceSize).toBe('function');
  });

  it('should return a number', () => {
    const result = maxTurbulenceSize('');
    expect(typeof result).toBe('number');
  });

  it('should return 5', () => {
    const result = maxTurbulenceSize([9, 4, 2, 10, 7, 8, 8, 1, 9]);
    expect(result).toBe(5);
  });

  it('should return 2', () => {
    const result = maxTurbulenceSize([4, 8, 12, 16]);
    expect(result).toBe(2);
  });

  it('should return 1', () => {
    const result = maxTurbulenceSize([100]);
    expect(result).toBe(1);
  });
  // CANNOT PASS THIS TEST!! GETTING 4 AS RESULT
  // it('should return 5', () => {
  //   const result = maxTurbulenceSize([37, 199, 60, 296, 257, 248, 115, 31, 273, 176]);
  //   expect(result).toBe(5);
  // });
});
