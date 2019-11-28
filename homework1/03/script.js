var x = 45;
var y = 11;
var z = 11;

var min = x;
var max = x;
var minname = 'x';
var maxname = 'x';

if (min > y) {
  min = y;
  minname = 'y';
}
if (max < y) {
  max = y;
  maxname = 'y';
}

if (min > z) {
  min = z;
  minname = 'z';
}

if (max < z) {
  max = z;
  maxname = 'z';
}

console.log(`Минимальное число: ${min}, имя первой переменной с этим числом: ${minname}`);
console.log(`Максимальное число: ${max}, имя первой переменной с этим числом: ${maxname}`);
