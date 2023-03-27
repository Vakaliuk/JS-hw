const titleResultRef = document.querySelector('.titleResult');
const showResult = document.createElement('p');
titleResultRef.append(showResult);

let num1;
let num2;
let result;
function checkNum() {
  num1 = prompt('Введіть перше число');
  if (num1 === '') {
    alert(`Помилка, Ви не ввели перше число`);
    return;
  } else if (num1 === null) {
    return;
  }

  num2 = prompt('Введіть друге число');
  if (num2 === '') {
    alert(`Помилка, Ви не ввели друге число`);
    return;
  } else if (num2 === null) {
    return;
  }

  if (isNaN(num1) || isNaN(num2)) {
    return alert('Потрібно вводити число');
  } else if (num1 === '' || num2 === '') {
    return alert('Помилка! Поле не може бути пустим');
  }
  return true;
}

function summ() {
  if (checkNum()) {
    result = Number(num1) + Number(num2);

    showResult.textContent = result;
    colorTextContent();
  }
}

function diff() {
  if (checkNum()) {
    result = num1 - num2;

    showResult.textContent = result;
    colorTextContent();
  }
}

function mult() {
  if (checkNum()) {
    result = num1 * num2;

    showResult.textContent = result;
    colorTextContent();
  }
}

function div() {
  if (checkNum()) {
    result = num1 / num2;

    showResult.textContent = result;
    colorTextContent();
  }
}

// ==================================================
// find minmax
let arr = [8, false, 22, 147, -28, 12, -55, '2', true, 'qweqwe', -7, 9, null];

let minNumber = Infinity;
let maxNumber = -Infinity;
let pColor;

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

const resultMax = function () {
  result = max(arr);

  showResult.textContent = result;
  colorTextContent();
};

const resultMin = function () {
  result = min(arr);

  showResult.textContent = result;
  colorTextContent();
};

// =================================
// foo for color
function colorTextContent() {
  if (showResult.textContent == 0) {
    return (showResult.style.color = 'black');
  } else if (showResult.textContent > 0 && showResult.textContent < 25) {
    return (showResult.style.color = 'hsl(115, 100%, 50%)');
  } else if (showResult.textContent > 25 && showResult.textContent < 50) {
    return (showResult.style.color = 'hsl(115, 100%, 40%)');
  } else if (showResult.textContent > 50 && showResult.textContent < 75) {
    return (showResult.style.color = 'hsl(115, 100%, 30%)');
  } else if (showResult.textContent > 75 && showResult.textContent < 100) {
    return (showResult.style.color = 'hsl(115, 100%, 25%)');
  } else if (showResult.textContent > 100 && showResult.textContent < 150) {
    return (showResult.style.color = 'hsl(115, 100%, 20%)');
  } else if (showResult.textContent > 150) {
    return (showResult.style.color = 'hsl(115, 100%, 15%)');
  } else if (showResult.textContent < 0 && showResult.textContent > -25) {
    return (showResult.style.color = 'hsl(0, 100%, 50%)');
  } else if (showResult.textContent < -25 && showResult.textContent > -50) {
    return (showResult.style.color = 'hsl(0, 100%, 40%)');
  } else if (showResult.textContent < -50 && showResult.textContent > -75) {
    return (showResult.style.color = 'hsl(0, 100%, 30%)');
  } else if (showResult.textContent < -75 && showResult.textContent > -100) {
    return (showResult.style.color = 'hsl(0, 100%, 25%)');
  } else if (showResult.textContent < -100 && showResult.textContent > -150) {
    return (showResult.style.color = 'hsl(0, 100%, 20%)');
  } else if (showResult.textContent < -150) {
    return (showResult.style.color = 'hsl(0, 100%, 15%)');
  }
}
