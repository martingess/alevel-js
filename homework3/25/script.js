//25. Напишите функция, которая принимает аргументом строку и возврашает нам строку преобразуя первую букву строки в верхний регистр.
//первый вариант
function foo(string) {
    let upperCase = string.charAt(0).toUpperCase() + string.slice(1)
    return upperCase;
}
//второй вариант
function bar(string) {
    let upperCase = string.replace(string[0], string[0].toUpperCase())
    return upperCase;
}