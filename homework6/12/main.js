//12. Дан ol. Вставьте ему в конец li с текстом 'HELLO WORLD!'.
var ol = document.querySelector('ol')
var li = ol.appendChild(document.createElement('li'))
li.textContent = 'Hello, world!'