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

  it('should return 0', () => {
    const result = maxTurbulenceSize('none');
    expect(result).toBe(0);
  });

  it('should return 1', () => {
    const result = maxTurbulenceSize('nlaebolko');
    expect(result).toBe(1);
  });

  it('should return 2', () => {
    const result = maxTurbulenceSize('loonbalxballpoon');
    expect(result).toBe(2);
  });

  it('should return 0 for balon', () => {
    const result = maxTurbulenceSize('balon');
    expect(result).toBe(0);
  });
});
