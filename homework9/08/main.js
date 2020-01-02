//8. Проверка на номер. Создать input и каждый раз, когда пользователь печатает текст. Проверять на то, что внутри у input только одни числа. Если там только число, то светить текст зеленым, если не только число, то светить красным. PS. color: red, green

const input = document.createElement('input');
document.body.append(input);
input.oninput = () => {
    if (isNaN(input.value)){
        input.style.color = 'red';
    } else {
        input.style.color = 'green'
    }
}