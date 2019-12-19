//7. Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число).

function getDivisors(number) {
    var arr = [];
    for (var i = 0; i < number; i++) {
        if (number % i === 0) {
            arr.push(i);
        }
    }
    return arr;
}

