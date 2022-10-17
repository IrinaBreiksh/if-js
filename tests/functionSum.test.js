import { sum } from '../src/scripts/main.js';

console.log(sum(5)(2));

test(`Sum is 7`, () => {
  expect(sum(5)(2)).toBe(7);
});
