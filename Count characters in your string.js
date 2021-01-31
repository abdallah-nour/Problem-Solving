function count(string) {
  let result = {};
  // string.split('').map(char => result[char] ? result[char]++ : result[char] = 1);
  result = [...string].reduce((acc, char) => (acc[char] ? acc[char]++ : acc[char] = 1, acc), {})
  return result;
}

console.log(count("abdallah"));