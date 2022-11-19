const object1 = {
  a: 'a',
  b: {
    a: 'a',
    b: 'b',
    c: {
      a: 1,
    },
  },
};
const object2 = {
  b: {
    c: {
      a: 1,
    },
    b: 'b',
    a: 'a',
  },
  a: 'a',
};
const object3 = {
  a: {
    c: {
      a: 'a',
    },
    b: 'b',
    a: 'a',
  },
  b: 'b',
};

export function deepEqual(object1, object2) {
  const value1 = Object.getOwnPropertyNames(object1);
  const value2 = Object.getOwnPropertyNames(object2);

  if (value1.length !== value2.length) {
    return false;
  }

  for (let i = 0; i < value1.length; i += 1) {
    const values = value1[i];
    const bothAreObjects =
      typeof object1[values] === 'object' &&
      typeof object2[values] === 'object';

    if (
      (!bothAreObjects && object1[values] !== object2[values]) ||
      (bothAreObjects && !deepEqual(object1[values], object2[values]))
    ) {
      return false;
    }
  }

  return true;
}

console.log(deepEqual(object1, object2));
console.log(deepEqual(object1, object3));
