//4. Дано 20 абзацов с числами от 1 до 20. По нажатию на абзац в нем должен появится квадрат числа, которое он содержит. Так же написать мне код Emmet(как генерировать 20 абзацов). Разраешается написать 2 строки кода в js

//emmet: p{$}*20

for (let item of document.getElementsByTagName('p')){
    item.addEventListener('click', () => item.textContent **= 2)
}