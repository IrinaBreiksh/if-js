let user = 'John Doe';
console.log(user);

const student = 'Irina';
console.log(student);

user = {
  student,
};

/**
 * выведется Irina
 */
console.log(user);

let test = 1;
test += 1;
test + '1';
// раз есть кавычки, то должна быть  строка '21'
console.log(test); // но вывелось 2

test -= 1;
// будет 1
console.log(test); // вывелось 1

Boolean(test);
// будет 1
console.log(test); // вывелось 1

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
  if (numbers[i] > 5 && numbers[i] < 10)
    console.log(numbers[i]);
}

const numbers1 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < numbers1.length; i++) {
  if (numbers1[i] % 2 === 0 && numbers1 !== 0)
    console.log(numbers1[i]);
}
