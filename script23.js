let arr = [22, 62, -28, 12, '2', true, 'qweqwe', 5, -7, 9, null];
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
let min = 0;
let max = 0;
for (let i = 0; i < arr.length; i++) {
  arr[i] < min ? (min = arr[i]) : (min = min);
  arr[i] > max ? (max = arr[i]) : (max = max);
}
console.log(`Lowest number: ${min}`);
console.log(`Highest number: ${max}`);

// tree
console.log('Half of tree:');
let leaf = '#';
let tree = '';
for (let i = 0; i < 5; i++) {
  tree = tree + leaf;
  console.log(tree);
}
