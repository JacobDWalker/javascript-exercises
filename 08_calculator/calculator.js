const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(nums) {
  if (nums.length === 0) {
    return 0;
  }
  return nums.reduce((a, b) => a + b, 0);
};

const multiply = function(nums) {
  return nums.reduce((a, b) => a * b, 0);
};

const power = function(num, power) {
	return Math.pow(num, power);
};

const factorial = function(num) {
  if (num === 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
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
