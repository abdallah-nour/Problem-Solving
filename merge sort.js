// get two sorted arrays
// return one sorted array from the combination of two.
function mergesorted(a, b) {
  let sortedArray = [];
  let p_left = 0;
  let p_right = 0;
  while (a.length && b.length) {
    if (a[p_left] <= b[p_right]) {
      sortedArray.push(a.shift());
    } else if (b[p_right] < a[p_left]) {
      sortedArray.push(b.shift());
    }
  }

  if (p_left < a.length) {
    sortedArray = [...sortedArray, ...a];
  } else if (p_right < b.length) {
    sortedArray = [...sortedArray, ...b];
  }
  return sortedArray;
}

const a = [1, 4, 5];
const b = [1, 2];
// console.log(mergesorted(a, b));

// the same fun using ES6 to short it
function mergesorted2(a, b, sortedArray = []) {
  while (a.length && b.length) a[0] <= b[0] ? sortedArray.push(a.shift()) : sortedArray.push(b.shift());
  return a.length ? [...sortedArray, ...a] : [...sortedArray, ...b];
}

console.log(mergesorted2(a, b));