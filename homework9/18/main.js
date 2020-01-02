//18. Дан элемент #myunique. По клику на него увеличьте его ширину и высоту и шрифт в 2 раза. Делайте это анимировано

const elem = document.getElementById('myunique');
elem.onclick = () => {
    elem.style.transition = 'all 0.5s';
    elem.style.width = elem.offsetWidth * 2 + 'px';
    elem.style.height = elem.offsetHeight * 2 + 'px';
    elem.style.backgroundColor = 'red';
    elem.style.fontSize = parseInt(getComputedStyle(elem).fontSize, 10) * 2 + 'px'
}