//10. Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.

let array = [10, 20, 30, 50, 235, 3000];

for (key of array){
    if (String(key).charAt(0) === '1' || String(key).charAt(0) === '2' || String(key).charAt(0) === '5'){
        console.log(key)
    }
}