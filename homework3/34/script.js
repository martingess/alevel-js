//34. Используя вложенные циклы, сформируйте двумерный массив, содержащий таблицу умножения:
//  "1x1=1; 2x1=1"
//  "1x2=2; 2x2=4"
// И выходим и останавливаем цикл, когда будет 6 умножнить на 6

let arr = [];
outer: for (let i = 1; i <= 10; i++) {
    arr[i] = [];
    for (let j = 1; j <= 10; j++){
        arr[i][j] = `${i} * ${j} = ${i*j}`;
        if(i === 6 && j === 6){
            break outer;
        }
    }
}