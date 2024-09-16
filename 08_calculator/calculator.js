const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce(((sum, num) => sum + num), 0);
};

const multiply = function(...args) {
  return args.reduce(((total, num) => num * total), 1);
};

const power = function(a, b) {
  let total = 1;
	for (let i = 0; i < b; i++)
    total *= a;

    return total;
};

const factorial = function(num) {
	let total = 1;

  for (let i = num; i > 0; i--)
    total *= i;

  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
