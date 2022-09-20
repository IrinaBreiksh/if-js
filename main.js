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
// will be displayed 1
console.log(test); // displayed 1

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
