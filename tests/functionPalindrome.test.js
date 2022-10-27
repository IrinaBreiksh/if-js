import { palindrome } from '../src/scripts/main.js';

console.log(palindrome('anna'));

test(`The word is palindrome`, () => {
  expect(palindrome('anna')).toBe(true);
  expect(palindrome('happy')).toBe(false);
});
