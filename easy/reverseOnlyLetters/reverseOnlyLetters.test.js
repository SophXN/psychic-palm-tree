/* eslint-disable no-undef */
const reverseOnlyLetters = require('./reverseOnlyLetters');

describe('Reverse Only Letters', () => {
  it('should be a function', () => {
    expect(typeof reverseOnlyLetters).toBe('function');
  });

  it('should return a string', () => {
    const result = reverseOnlyLetters('');
    expect(typeof result).toBe('string');
  });

  it('should return "dc-ba"', () => {
    const result = reverseOnlyLetters('ab-cd');
    expect(result).toBe('dc-ba');
  });

  it('should return "j-Ih-gfE-dCba"', () => {
    const result = reverseOnlyLetters('a-bC-dEf-ghIj');
    expect(result).toBe('j-Ih-gfE-dCba');
  });

  it('should return "Qedo1ct-eeLg=ntse-T!"', () => {
    const result = reverseOnlyLetters('Test1ng-Leet=code-Q!');
    expect(result).toBe('Qedo1ct-eeLg=ntse-T!');
  });

  it('should return "d-a-d1"', () => {
    const result = reverseOnlyLetters('d-a-d1');
    expect(result).toBe('d-a-d1');
  });
});
