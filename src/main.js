module.exports = {
  sum: (num1, num2) => num1 + num2,
  sub: (num1, num2) => num1 - num2,
  multi: (num1, num2) => num1 * num2,
  div: (num1, num2) => (num2 === 0 ? 'Can not divide by zero' : num1 / num2),
};
