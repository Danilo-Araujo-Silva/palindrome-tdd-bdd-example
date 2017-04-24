const request = require('request');
const properties = require('./../../shared/configuration/properties');

const host = properties.constants.server.host;
const port = properties.constants.server.port;

const outputs = {
  isPalindrome: 'is a palindrome',
  isNotPalindrome: 'is not a palindrome'
}

const checkIfIsAPalindrome = function(error, response, body) {
  const output = JSON.parse(body).output;

  expect(error).toBe(null);
  expect(response.statusCode).toBe(200);
  expect(output).toBe(outputs.isPalindrome);
}

const checkIfIsNotAPalindrome = function(error, response, body) {
  const output = JSON.parse(body).output;

  expect(error).toBe(null);
  expect(response.statusCode).toBe(400);
  expect(output).toBe(outputs.isNotPalindrome);
}

const callAndCheckIfIsAPalindrome = function(input) {
  request(
    `http://${host}:${port}/checkPalindrome/${input}`,
    function(error, response, body) {
      checkIfIsAPalindrome(error, response, body);
    }
  );
}

const callAndCheckIfIsNotAPalindrome = function(input) {
  request(
    `http://${host}:${port}/checkPalindrome/${input}`,
    function(error, response, body) {
      checkIfIsNotAPalindrome(error, response, body);
    }
  );
}

it('check calling the Palindrome REST API if "1" is a palindrome.', () => {
  callAndCheckIfIsAPalindrome(1);
});

it('check calling the Palindrome REST API if "11" is a palindrome.', () => {
  callAndCheckIfIsAPalindrome(11);
});

it('check calling the Palindrome REST API if "one" is not a palindrome.', () => {
  callAndCheckIfIsNotAPalindrome('one');
});

it('check calling the Palindrome REST API if "aba" is a palindrome.', () => {
  callAndCheckIfIsAPalindrome('aba');
});

it('check calling the Palindrome REST API if "A MAN A PLAN A CANAL PANAMA" is a palindrome.', () => {
  callAndCheckIfIsAPalindrome('A MAN A PLAN A CANAL PANAMA');
});

it('check calling the Palindrome REST API if "socorram-me subi no ônibus em marrocos" is a palindrome.', () => {
  callAndCheckIfIsAPalindrome('socorram-me subi no ônibus em marrocos');
});

it('check calling the Palindrome REST API if "MACACO" is not a palindrome.', () => {
  callAndCheckIfIsNotAPalindrome('MACACO');
});
