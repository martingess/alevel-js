//27. Напишите функция, которая принимает аргументом строку и преобразуйте например 'var_test_text' в 'varTestText'. Функция, конечно же, должен работать с любыми аналогичными строками.
function bar(string) {
    let newString = string.split('_').reduce((priviousValue, currentValue) =>
        priviousValue + currentValue[0].toUpperCase() + currentValue.slice(1)
    )
    console.log(newString)
}