alert(
  'Введіть в консолі для:\nДодавання:\n sum(n1, n2); \nВіднімання:\n sub(n1, n2);\nМноження:\n mult(n1, n2);\nДілення:\n div(n1, n2); '
);

const sum = function sumNumber(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    return alert('Потрібно вводити число');
  } else if (num1 == '' || num2 == '') {
    return alert('Помилка! Поле не може бути пустим');
  } else {
    return alert('Результат суми:' + ' ' + (num1 + num2));
  }
};

const sub = function subNumber(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    return alert('Потрібно вводити число');
  } else if (num1 == '' || num2 == '') {
    return alert('Помилка! Поле не може бути пустим');
  } else if (num1 < num2) {
    if (confirm('Ви впевненні, що хочете продовжити операцію?')) {
      return alert('Результат різниці:' + ' ' + (num1 - num2));
    }
  }
};

const mult = function multNumber(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    return alert('Потрібно вводити число');
  } else if (num1 == '' || num2 == '') {
    return alert('Помилка! Поле не може бути пустим');
  } else {
    return alert('Результат множення:' + ' ' + num1 * num2);
  }
};

const div = function divNumber(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    return alert('Потрібно вводити число');
  } else if (num2 == 0) {
    return alert('На нуль ділити не можна');
  } else {
    return alert('Результат ділення:' + ' ' + num1 / num2);
  }
};
