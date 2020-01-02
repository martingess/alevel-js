// 1. Даны ссылки. Привяжите всем ссылкам событие - каждый раз по наведению на ссылку в конец атрибута title запишется её текст.
const urlList = document.getElementsByClassName('myurl');
for (const element of urlList) {
    element.onmouseover = () => {
        element.title = element.textContent
    }
}