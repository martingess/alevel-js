//11. Даны элементы с классом www. Добавьте каждому элементу в конец название его тега в нижнем регистре.
elements = document.querySelectorAll('.www')
for (value of elements) {
    value.textContent += value.tagName.toLowerCase()
}
