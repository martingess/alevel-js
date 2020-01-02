// 16. Дан инпут. Дана кнопка. По нажатию на кнопку клонируйте этот инпут и вставляйте рядом.
let input = document.getElementsByTagName('input')[0]
let btn = document.getElementsByTagName('button')[0]
btn.onclick = () => {
    document.body.append(input.cloneNode())
}