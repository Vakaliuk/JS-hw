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

// hw26 'Акумулятор'
alert(
  'Впишіть в консоль: const acc = new Accumulator(1); \n далі: acc.increment(); або acc.decrement();\nДоповненний акумулятор: const acc2 = new CancelableAcc(10);\n далі: попередні методи + acc2.clear();'
);

function Accumulator(n) {
  this.number = n;
}

Accumulator.prototype.increment = function () {
  this.number++;
  console.log(`${this.number}`);
};

Accumulator.prototype.decrement = function () {
  this.number--;
  console.log(`${this.number}`);
};

function CancelableAcc(n) {
  Accumulator.call(this, n);

  this.clear = function () {
    this.number = n;
    console.log(`${this.number}`);
  };
}

CancelableAcc.prototype = Object.create(Accumulator.prototype);
