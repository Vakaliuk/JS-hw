let arr = [false, 22, 62, -28, 12, '2', true, 'qweqwe', 5, -7, 9, null];
console.log(arr);

// sum number
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] !== 'number') {
    continue;
  } else {
    sum = sum + arr[i];
  }
}
console.log(`Total: ${sum}`);

// find min-max
alert(
  'Введіть в консолі для пошуку:\nМаксимального числа:\n max(arr); \nМінімального числа:\n min(arr);'
);
let minNumber = 0;
let maxNumber = 0;

const max = function findMaxNumber(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') {
      continue;
    } else {
      arr[i] > maxNumber ? (maxNumber = arr[i]) : (maxNumber = maxNumber);
    }
  }
  return console.log(`Highest number: ${maxNumber}`);
};

const min = function findMinNumber(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') {
      continue;
    } else {
      arr[i] < minNumber ? (minNumber = arr[i]) : (minNumber = minNumber);
    }
  }
  return console.log(`Lowest number: ${minNumber}`);
};
