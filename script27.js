let arr = [
  8,
  false,
  22,
  147,
  62,
  -28,
  12,
  -55,
  '2',
  true,
  'qweqwe',
  5,
  -7,
  9,
  null,
];
console.log(arr);

// ============================================
// show arr
const containerRef = document.querySelector('.minmax');
const showArr = document.createElement('p');

showArr.textContent = arr;
containerRef.prepend(`actual arr: ${arr}`);

// ==========================================
// calc number: prepare
let num1;
let num2;
let result;

const input1 = document.getElementById('num1');
const input2 = document.getElementById('num2');

const sumBtn = document.getElementById('sumBtn');
const subBtn = document.getElementById('subBtn');

sumBtn.addEventListener('click', () => {
  num1 = input1.value;
  num2 = input2.value;
  resultSum();
});

subBtn.addEventListener('click', () => {
  num1 = input1.value;
  num2 = input2.value;
  resultSub();
});

// calc number: SUMM foo
const sum = function sumNumber(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    return alert('Потрібно вводити число');
  } else if (num1 == '' || num2 == '') {
    return alert('Помилка! Поле не може бути пустим');
  } else {
    result = Number(num1) + Number(num2);
    return result;
  }
};

const resultSum = function () {
  resultNum.textContent = sum(num1, num2);

  let pColor = colorTextContent();
  resultNum.style.color = pColor;

  resultRef.append(resultNum);
};

// calc number: SUBT foo
const sub = function sumNumber(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    return alert('Потрібно вводити число');
  } else if (num1 == '' || num2 == '') {
    return alert('Помилка! Поле не може бути пустим');
  } else {
    result = Number(num1) - Number(num2);
    return result;
  }
};

const resultSub = function () {
  resultNum.textContent = sub(num1, num2);

  let pColor = colorTextContent();
  resultNum.style.color = pColor;

  resultRef.append(resultNum);
};

// ====================================
// find minmax
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
  return maxNumber;
};

const min = function findMinNumber(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') {
      continue;
    } else {
      arr[i] < minNumber ? (minNumber = arr[i]) : (minNumber = minNumber);
    }
  }
  return minNumber;
};

// ================================
// show Result
const resultRef = document.querySelector('.titleResult');
const resultNum = document.createElement('p');

const resultMax = function () {
  resultNum.textContent = max(arr);

  let pColor = colorTextContent();
  resultNum.style.color = pColor;

  resultRef.append(resultNum);
};

const resultMin = function () {
  resultNum.textContent = min(arr);

  let pColor = colorTextContent();
  resultNum.style.color = pColor;

  resultRef.append(resultNum);
};

// =================================
// foo for color
const colorTextContent = function () {
  if (resultNum.textContent > 0 && resultNum.textContent < 25) {
    return 'black';
  } else if (resultNum.textContent > 0 && resultNum.textContent < 25) {
    return 'hsl(115, 100%, 50%)';
  } else if (resultNum.textContent > 25 && resultNum.textContent < 50) {
    return 'hsl(115, 100%, 40%)';
  } else if (resultNum.textContent > 50 && resultNum.textContent < 75) {
    return 'hsl(115, 100%, 30%)';
  } else if (resultNum.textContent > 75 && resultNum.textContent < 100) {
    return 'hsl(115, 100%, 25%)';
  } else if (resultNum.textContent > 100 && resultNum.textContent < 150) {
    return 'hsl(115, 100%, 20%)';
  } else if (resultNum.textContent > 150) {
    return 'hsl(115, 100%, 15%)';
  } else if (resultNum.textContent < 0 && resultNum.textContent > -25) {
    return 'hsl(0, 100%, 50%)';
  } else if (resultNum.textContent < -25 && resultNum.textContent > -50) {
    return 'hsl(0, 100%, 40%)';
  } else if (resultNum.textContent < -50 && resultNum.textContent > -75) {
    return 'hsl(0, 100%, 30%)';
  } else if (resultNum.textContent < -75 && resultNum.textContent > -100) {
    return 'hsl(0, 100%, 25%)';
  } else if (resultNum.textContent < -100 && resultNum.textContent > -150) {
    return 'hsl(0, 100%, 20%)';
  } else if (resultNum.textContent < -150) {
    return 'hsl(0, 100%, 15%)';
  }
};
