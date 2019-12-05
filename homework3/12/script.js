//12. Дана строка 'aaa@bbb@ccc'. Замените все @ на '!' с помощью глобального поиска и замены.
var str = 'aaa@bbb@ccc';
str = str.splice(/@/g, '!');

console.log(str);