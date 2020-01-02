//10. Дан элемент #myunique. Удалите у него класс www вместо с атрибутом при нажатии.

const myunique = document.getElementById('myunique')
myunique.onclick = () => {
    myunique.classList.remove('www')
}