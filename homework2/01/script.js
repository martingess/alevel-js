// //1. Напишите код вычисления суммы всех нечетных чисел от 0 до заданного числа N
// - Спрашиваем у пользователя через prompt
// - Переводим в number(потому что из prompt мы получаем строку)
// - Дальше думаем сами
// В конце просто я должен увидеть сумму от 0 до N числа, который я ввёл

var finalNumber = Number(prompt("Enter a final number"));
var result = 0;
for (var i = 0; i<=finalNumber; i++){
    if (i%2) {
        result+=i;
    }
}
console.log(result);