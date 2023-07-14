//summing elements of an array
function add(iarr) {
  let sum = 0;
  for (var x of iarr) {
    sum += x;
  }
  return sum;
}

const arr = [1, 2, 3, 4, 5, 6];
let result = add(arr);
console.log(result);
