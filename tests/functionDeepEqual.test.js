import { deepEqual } from '../src/scripts/main.js';

const obj1 = {
  a: {
    c: {
      a: '20',
    },
    b: '100',
  },
  b: '50',
};
const obj2 = {
  b: '50',
  a: {
    c: {
      a: '20',
    },
    b: '100',
  },
};
const obj3 = {
  c: {
    a: '20',
  },
  b: '100',
};

deepEqual(obj1, obj2);

test(`Two objects are equal`, () => {
  expect(deepEqual(obj1, obj2)).toBe(true);
  expect(deepEqual(obj1, obj3)).toBe(false);
});
