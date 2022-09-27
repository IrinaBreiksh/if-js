let user = 'John Doe';
console.log(user);

const student = 'Irina';
console.log(student);

user = student;
// will be displayed Irina
console.log(user); // displayed Irina

let test = 1;
test += 1;
test += '1';
// should be string '21'
console.log(test); // we got '21'

test -= 1;
// will be displayed 20
console.log(test); // displayed 20

test = Boolean(test);
// should be 1
console.log(test); // displayed 1

const array = [2, 3, 5, 8];
console.log(array);
console.log(array.length);
let result = 1;
for (let i = 0; i < array.length; i++) {
  result *= array[i];
}
console.log(result);

const numbers = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 5 && numbers[i] < 10) console.log(numbers[i]);
}

const numbers1 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < numbers1.length; i++) {
  if (numbers1[i] % 2 === 0 && numbers1[i] !== 0) console.log(numbers1[i]);
}

function min1(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
console.log(min1(300, 93));

function max1(a, y) {
  if (a > y) {
    return a;
  } else {
    return y;
  }
}
console.log(max1(5, 10));

const min = (a, b) => a < b;
min(222, 4);
const max = (a, b) => a < b;
max(333, 52);

const Numbers = [0, 30, 8, 78, 60, 44, 3, 19, 20, 100];
console.log(Numbers);
function renameZero() {
  for (let i = 0; i < Numbers.length; i++) {
    if (Numbers[i] === 0) {
      Numbers[i] = 'zero';
    } else if (Numbers[i] % 100 === 0) {
      Numbers[i] = Numbers[i] / 100 + 'zero' + 'zero';
    } else if (Numbers[i] % 10 === 0) {
      Numbers[i] = Numbers[i] / 10 + 'zero';
    }
  }
  return Numbers;
}
renameZero(Numbers);
console.log(Numbers);

function palindrome(word) {
  for (let i = 0; i < Math.round(word.length / 2) ; i++) {
    if (word[i] !== word[word.length - i - 1]) {
      return false;
    }
  }
  return true;
}
console.log(palindrome('one'));
console.log(palindrome('mom'));

