export const palindrome = (word) => {
  return word === word.split('').reverse().join('');
};

console.log(palindrome('dfggfd'));

const obj1 = {
  a: 'a',
  b: {
    a: 'a',
    b: 'b',
    c: {
      a: 1,
    },
  },
};
const obj2 = {
  b: {
    c: {
      a: 1,
    },
    b: 'b',
    a: 'a',
  },
  a: 'a',
};
const obj3 = {
  a: {
    c: {
      a: 'a',
    },
    b: 'b',
    a: 'a',
  },
  b: 'b',
};

const deepEqual = () => {
  const values1 = Object.getOwnPropertyNames(obj1);
  const values2 = Object.getOwnPropertyNames(obj2);

  for (let i = 0; i < values1.length; i++) {
    if (obj1[values1[i]] !== obj2[values2[i]]) {
      return false;
    }
  }
  return true;
};

console.log(deepEqual(obj1, obj2));
console.log(deepEqual(obj1, obj3));
