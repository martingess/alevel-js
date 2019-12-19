//4. Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.

function getDigitsSum(number) {
    return Number(number.toString(10)
        .split('')
        .reduce((accamulator, current) => +accamulator + +current))
}

//

function rec(number) {
    if (number === 0) {
        return 0
    }
    return number + rec(number - 1)
}