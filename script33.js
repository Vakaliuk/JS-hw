Array.prototype.pow = function (n) {
  const powArr = this.map((item) => {
    return item ** n;
  });
  return powArr;
};

function a() {
  console.log('test');
  return this;
}

Function.prototype.defer = function (n) {
  setTimeout(this, n);
};

a.defer(1000);
