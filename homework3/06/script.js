//6. Дан объект obj. С помощью цикла for-in выведите на экран ключи и элементы этого объекта. 

var colors = {
    green: 'зеленый',
    red: 'красный',
    blue: 'голубой'
}

for (key in colors) {
    console.log(`Ключ: ${key}, элемент ${colors[key]}`)
}