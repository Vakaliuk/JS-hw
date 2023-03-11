// Перевірка на пустий масив
const emptyArr = [];
const arr = [1, 2, 3, 4, 5];

const voidObject = function isVoid(obj) {
  if (Object.keys(obj).length === 0) {
    return alert('Массив є пустим');
  } else {
    return alert('Массив Не є пустим');
  }
};

// Метод "вітання"
const greeting = {
  name: 'John',
  age: 25,

  sayHello() {
    alert(`Привіт, я ${this.name}, мені ${this.age} років`);
  },
};

// Калькулятор
const calc = {
  ask() {
    calc.num1 = Number(prompt('Введіть перше число'));
    calc.num2 = Number(prompt('Введіть друге число'));

    if (isNaN(this.num1) || isNaN(this.num2)) {
      alert('Потрібно вводити число');
      this.ask();
    }
  },

  sum() {
    alert(this.num1 + this.num2);
  },

  mul() {
    alert(this.num1 * this.num2);
  },
};
