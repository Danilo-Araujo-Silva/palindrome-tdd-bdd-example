const isPalindrome = input => {
  let forward = input.toString().toLowerCase().replace(/\W+/g, '').replace(/\s/g, '');
  let backward = forward.split('').reverse().join('');

  if (forward === backward) {
    return true;
  } else {
    return false;
  }
};

module.exports = isPalindrome;
