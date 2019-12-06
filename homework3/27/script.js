//27. Напишите функция, которая принимает аргументом строку и преобразуйте например 'var_test_text' в 'varTestText'. Функция, конечно же, должен работать с любыми аналогичными строками.
function foo(string) {
    let newString = string.split('_').join('');
    return newString;
}

console.log(foo('var_test_text'))