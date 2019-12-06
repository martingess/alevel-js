//26. Напишите функция, которая принимает аргументом строку и возврашает нам строку преобразуя последнюю букву строки в верхний регистр.
//первый способ
function foo(string) {
    let upperCase = string.slice(0,string.length-1) + string.charAt(length-1).toUpperCase()
    return upperCase;
}

//второй способ
function bar(string){
    let newString = string.replace(string[length-1], string[length-1].toUpperCase());
    return newString
}
