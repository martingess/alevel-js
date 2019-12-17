//14. Дан элемент #elem. Найдите его соседа сверху и добавьте ему в конец текст '!'.
var element = document.querySelector('#elem');
element.previousElementSibling.textContent += '!'