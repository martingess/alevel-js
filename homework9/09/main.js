//9. Дан элемент в вёрстке с id #myunique. Добавьте ему класс www.  при нажатии через js естественно
const uniquie = document.getElementById('myunique');
uniquie.onclick = () => {
    uniquie.classList.add('www')
}
