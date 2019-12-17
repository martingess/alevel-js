//13. Дан элемент ul, а в нем li #myunique. Вставьте перед элементом #myunique новую li с текстом '!!!'.
var li = document.querySelector('#myunique')
var liBefore = document.createElement('li')
liBefore.textContent = '!!!'
li.before(liBefore)