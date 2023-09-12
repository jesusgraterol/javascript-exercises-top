const add = function(a, b) {
    return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(values) {
    return values.reduce((accum, current) => accum + current, 0);
};

const multiply = function(values) {
    return values.reduce((accum, current) => accum * current, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(value) {
    let res = 1;
	for (let i = 1; i <= value; i++) res = res * i;
    return res;
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
