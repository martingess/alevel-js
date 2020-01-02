//2. 5 ссылок. Привяжите всем ссылкам событие онклик - по клику на ссылку в конец ее текста дописывается ее href в круглых скобках. Внутри href должно быть по умолчанию https://google.com

const urlList = document.getElementsByTagName('a');

const showPath = (event) => {
    event.preventDefault()
    if (!event.currentTarget.textContent.includes(event.currentTarget.href)) {
        event.currentTarget.textContent += `(${event.currentTarget.href})`
    }
}

for (item of urlList) {
    item.onclick = showPath;
}