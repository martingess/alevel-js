//4. Дан элемент в вёрстке с id #myunique. Добавьте ему класс www. через js естественно
var element = document.querySelector("#myunique")
element.classList.add('www')

//5. Дан элемент #myunique. Удалите у него класс www.
// element.classList.remove('www')

//6. Дан элемент #myunique. Проверьте наличие у него класса www.
var checkClass = (element, className) => {
    for (value of element.classList) {
        if (value === className) {
            console.log("Есть такой класс")
            return;
        }
    }
    console.log("Такого класса нет")
}
checkClass(element, 'www')

//7. Дан элемент #myunique. Добавьте ему класс www, если его нет и удалите - если есть. | Вы зарание не знаете, есть тамм этот класс или нету
element.classList.toggle('www')

//8. Дан элемент #myunique. Узнайте количество его классов.
function numberOfClasses(element) {
    return element.classList.length
}

//9. Дан элемент #myunique. По клику на него выведите название его тега.
element.onclick = function () {
    alert(element.tagName)
}

//10. Дан элемент #myunique. По клику на него выведите название его тега в нижнем регистре.
element.onclick = function () {
    alert(element.tagName.toLowerCase())
}