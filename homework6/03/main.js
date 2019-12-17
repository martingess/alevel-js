var input = document.createElement('input')
document.body.appendChild(input)

//первый вариант
input.oninput = () => {
    input.style.color = isNaN(input.value) ? 'red' : 'green'
}

//второй вариант
setInterval(() => {
    input.style.color = isNaN(input.value) ? 'red' : 'green'
});