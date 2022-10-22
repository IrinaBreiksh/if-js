import { changeDate } from '../src/scripts/main.js';

console.log(changeDate('2017-01-25'));

test(`Date changed`, () => {
  expect(changeDate('2017-01-25')).toBe('25.01.2017');
});
