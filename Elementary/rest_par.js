//indefinite parameters to a function
function add(...sat) {
  let sum = 0;
  for (let x of sat) {
    sum += x;
  }
  return sum;
}
let result = add(1, 1, 1, 1, 1, 1);
console.log(result);
