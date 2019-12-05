//1. Выведите столбец чисел от 1 до 50. через do while
//50 включительно

let i = 0;
do {
    console.log(++i);
} while (i < 50)

//2. Дан массив с элементами [1, 2, 3, 4, 5]. 
//С помощью цикла for выведите все 
//эти элементы на экран. Через for of
let array = [1, 2, 3, 4, 5]
for (key of array) {
    console.log(key)
}

// 3.  Дан массив с элементами [2, 3, 4, 5]. 
// С помощью цикла for найдите произведение элементов этого массива. Через for of
let array2 = [2, 3, 4, 5]
let sumOfArray2 = 0;
for (key of array) {
    sumOfArray2 += key
}
console.log(sumOfArray2)

//4. Дан объект obj с ключами 'Минск', 'Москва', 'Киев' с элементами 'Беларусь', 'Россия', 'Украина'. С помощью цикла for-in выведите на экран строки такого формата: 'Минск - это Беларусь.'.

let cities = {
    "Минск": "Беларусь",
    "Москва": "Россия",
    "Киев": "Украина"
}

for (key in cities) {
    console.log(`${key} - это ${cities[key]}`)
}

//5. Выведите столбец четных чисел в промежутке от 0 до 100. через while

let j = 0;
while (j <= 100) {
    if (!(j % 2)) {
        console.log(j)
    }
    j++
}

//6. Дан объект obj. С помощью цикла for-in выведите на экран ключи и элементы этого объекта. 

var colors = {
    green: 'зеленый',
    red: 'красный',
    blue: 'голубой'
}

for (key in colors) {
    console.log(`Ключ: ${key}, элемент ${colors[key]}`)
}

//7. Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла for и оператора if выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10.

let array7 = [2, 5, 9, 15, 0, 4];
for (value of array7) {
    if (value > 3 && value < 10) {
        console.log(value)
    }
}

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

//9. Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением, равным 4. Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - пропускаем итерацию

let array9 = [1, 2, 5, 9, 4, 13, 4, 10]
for (value of array9){
    if (value === 4){
        console.log('Есть!')
    } else {
        continue
    }
}