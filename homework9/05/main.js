// 5.  Привяжите всем ссылкам событие онклик - по клику на ссылку в конец ее текста дописывается ее href в круглых скобках. Внутри href должно быть по умолчанию https://google.com
// Приветсвуется самый короткий код не больше 100 символов на одной строке

for (let item of document.getElementsByTagName('a')) {
    item.onclick = () => {
        event.preventDefault()
        if (!event.currentTarget.textContent.includes(event.currentTarget.href)) {
            event.currentTarget.textContent += `(${event.currentTarget.href})`
        }
    };
}