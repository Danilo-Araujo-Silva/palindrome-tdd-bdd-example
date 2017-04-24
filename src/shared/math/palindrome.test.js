const isPalindrome = require('./palindrome');

it('check if "1" is a palindrome', () => {
  expect(isPalindrome(1)).toBe(true);
});

it('check if "11" is a palindrome', () => {
  expect(isPalindrome(11)).toBe(true);
});

it('check if "one" is not a palindrome', () => {
  expect(isPalindrome('one')).toBe(false);
});

it('check if "aba" is a palindrome', () => {
  expect(isPalindrome('aba')).toBe(true);
});

it('check if "MACACO" is not a palindrome', () => {
  expect(isPalindrome('MACACO')).toBe(false);
});

it('check if "A MAN A PLAN A CANAL PANAMA" is a palindrome', () => {
  expect(isPalindrome('A MAN A PLAN A CANAL PANAMA')).toBe(true);
});

it('check if "socorram-me subi no ônibus em marrocos" is a palindrome', () => {
  expect(isPalindrome('socorram-me subi no ônibus em marrocos')).toBe(true);
});
