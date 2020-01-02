// 7. Создать button и повесить обработчик нажатие. По нажатию на кнопку должно поменяться ее текст. По умолчанию Кнопка. После нажатие Кирпич

const button = document.createElement('button')
button.textContent = 'Кнопка';
button.onclick = () => {
    button.textContent = 'Киприч'
}
document.body.append(button)