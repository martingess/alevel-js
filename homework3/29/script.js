//29. Сгенерируйте массив из n случайных чисел с двумя знаками после запятой. Переберите массив и распечатайте в консоли значения его элементов, возведенные в пятую степень, не используя функцию Math.pow().

function foo(n, powder = 5) {
    let arrayRandom = [];
    for (let i = 0; i < n; i++) { //генерирует случайные значения и кидает их в массив
        arrayRandom.push(Math.random().toFixed(2) * 10)
    }
    for (let i = 0; i < arrayRandom.length; i++) { //возводит числа массива в 5 степень
        let basic = arrayRandom[i];
        let temp = arrayRandom[i];
        for (let i = 0; i < powder - 1; i++) {
            temp *= basic;
        }
        arrayRandom[i] = temp;
    }
    return arrayRandom;
}