import { getColor } from '../src/scripts/main.js';

document.addEventListener('DOMContentLoaded', function () {
  const text1 = document.getElementById('text1');
  const text2 = document.getElementById('text2');
  const text3 = document.getElementById('text3');
  text1.addEventListener('click', getColor());
  text2.addEventListener('click', getColor());
  text3.addEventListener('click', getColor());
});

test(`Function getColor returns`, () => {
  const getColor=jest.fn(()=> true);
  getColor();
  expect(getColor).toHaveReturned();
});
