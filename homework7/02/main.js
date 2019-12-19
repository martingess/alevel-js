//2. Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее).

var num = 5329

function recReduce(number) {
    var sum = number.toString(10)
        .split('')
        .reduce((accamulator, current) => +accamulator + +current)
    if (sum > 9) {
        recReduce(sum)
    }
    console.log(sum)
}

recReduce(num)