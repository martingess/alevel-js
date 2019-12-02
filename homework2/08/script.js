var str = 'Привет, Мир!';
var result = 0;

for (var i = 0; i < str.length; i++) {
    result+=str.charCodeAt(i);
}
console.log(result)