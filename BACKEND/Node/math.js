/*
// sending data from this file to another file using module.exports and require

const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;

let obj = {
  sum: sum,
  sub: sub,
  mul: mul,
  div: div,
};

module.exports = obj;
*/

// sending data from this file to another file using export and import

export const sum = (a, b) => a + b;
export const sub = (a, b) => a - b;
export const mul = (a, b) => a * b;
export const div = (a, b) => a / b;
