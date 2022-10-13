export function sum(a) {
  return function (b) {
    return a + b;
  };
}
console.log(sum(5)(2));

const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

export function getColor() {
  let i = 0;
  return function getColor(event) {
    event.target.style.color = colors[i];
    if (i === colors.length) {
      i = 0;
    }
    i++;
  };
}

document.addEventListener('DOMContentLoaded', function () {
  const text1 = document.getElementById('text1');
  const text2 = document.getElementById('text2');
  const text3 = document.getElementById('text3');
  text1.addEventListener('click', getColor());
  text2.addEventListener('click', getColor());
  text3.addEventListener('click', getColor());
});





