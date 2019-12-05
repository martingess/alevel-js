//11. Возведите 2 в 10 степень. Результат запишите в переменную st.

//первый вариант
function pawRec(number, power) {
    if (power === 1) {
        return number
    }
    return number * pawRec(number, power - 1)
}
var result = pawRec(2, 9)
console.log(result)


//второй вариант
function pawCycle(number, power) {
    let result = 1;
    for (let i = 0; i < power; i++) {
        result *= number;
    }
    return result;
}

var resultCycle = pawCycle(2,9)
console.log(resultCycle);