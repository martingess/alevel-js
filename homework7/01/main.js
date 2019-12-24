//1. Дан массив с числами. Выведите последовательно его элементы используя рекурсию и не используя цикл.
//Так же если елементы массива это object или array, то их елементы тоже выводи отдельно
//[1, 4, 5, [8, 0, 10, 3], 6, 64, 64, 54, {key: "name", age: 18}]

var arr = [1, 4, 5, [8, 0, 10, 3], 6, 64, 64, 54, {
    key: "name",
    age: 18
}]

function displayValue(arr) {
    if (!arr.length) {
        return
    }
    var currentValue = arr.shift();
    if (Array.isArray(currentValue)) { // проверка на массив
        displayValue(currentValue)
    } else if (typeof (currentValue) === 'object') { //проверка на объект 
        displayValue(Object.values(currentValue));
    }
    if (typeof (currentValue) !== 'object') // не выводим лишний мусор в консоль
        console.log(currentValue);
    displayValue(arr);
}