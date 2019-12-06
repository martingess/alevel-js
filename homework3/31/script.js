//31. Задание на МС.  Создайте пустой массив. В цикле до n на каждой итерации запускайте prompt для ввода любых символов, полученное значение добавляйте в конец созданного массива. После выхода из цикла посчитайте сумму всех чисел массива и выведите в alert полученный результат
let arr = [];

function foo(n) {
    for (let i = 0; i < n; i++) {
        arr.push(prompt('Enter some value'));
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        if (!isNaN(arr[i])){
            sum += Number(arr[i]);
        }
    }
    alert(sum);
}