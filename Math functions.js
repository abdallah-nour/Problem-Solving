
const splitNumber = (number) => ({ integer: +(number + '').split('.')[0] || 0, fraction: +('.' + (number + '').split('.')[1]) || 0 })
// Also can use parseInt to get the int from double number.

Math.round = function (number, integer = splitNumber(number).integer, fraction = splitNumber(number).fraction) {
  return (fraction) >= 0.5 ? integer + 1 : integer;
};
Math.ceil = function (number, integer = splitNumber(number).integer, fraction = splitNumber(number).fraction) {
  return fraction !== 0 ? integer + 1 : integer;
};
Math.floor = function (number, integer = splitNumber(number).integer) {
  return integer;
};

console.log(Math.round(3.5));
console.log(Math.ceil(3.1));
console.log(Math.floor(3.9));