//11. Дан элемент #myunique. При нажатии добавляйте ему класс www, если нету такого класса, а если есть, то убирайте 

const myunique = document.getElementById('myunique')
myunique.onclick = () => {
    myunique.classList.toggle('www')
}