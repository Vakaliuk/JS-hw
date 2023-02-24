let num1 = Number(prompt('Введіть перше число'));
let num2 = Number(prompt('Введіть друге число'));

if (isNaN(num1) || isNaN(num2)) {
  alert('Потрібно вводити число');
} else if (num1 == '' || num2 == '') {
  alert('Помилка! Поле не може бути пустим');
} else {
  alert('Сума:' + ' ' + (num1 + num2));

  if (num1 < num2) {
    if (confirm('Ви впевненні, що хочете продовжити операцію?')) {
      alert('Різниця:' + ' ' + (num1 - num2));
    }
  }

  alert('Множення:' + ' ' + num1 * num2);

  if (num2 == 0) {
    alert('Ділення: На нуль ділити не можна');
  } else {
    alert('Ділення:' + ' ' + num1 / num2);
  }
}
