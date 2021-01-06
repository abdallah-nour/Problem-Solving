function factorial(n) {
  if (n < 0) return;
  if (n === 2) return 2;
  return n * factorial(n - 1);
}

function decomp(n) {
  n = factorial(n);
  let factors = {};
  let currentValue = n;
  for (let i = 2; i <= currentValue; i++) {
    while (currentValue % i === 0) {
      factors[i] ? factors[i]++ : factors[i] = 1;
      currentValue = currentValue / i;
    }
  }
  let result = [];
  for (let key in factors) {
    result.push(factors[key] > 1 ? `${key}^${factors[key]}` : `${key}`);
  }
  return result.join(" * ");
}

function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i < n; i++) if (n % i === 0) return false;
  return true;
}

console.log(decomp(12));
// console.log(factorial(5));
