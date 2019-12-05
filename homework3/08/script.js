//8. Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.

function positiveNumbers(array) {
    let sum = 0;
    for (value of array) {
        if (value > 0) {
            sum += value
        }
    }
    console.log(`Сумма положительные: ${sum}`)
}
let arrayNegativePositive = [2, 3, 4, -1, 2, -5, 6, -20]

positiveNumbers(arrayNegativePositive);