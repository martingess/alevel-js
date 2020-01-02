//3. 5 ссылок как и в задаче 2. Только после трех кликов на ссылку следует убрать от нее событие, которое добавляет href в конец текста как в предыдушей задачи

const urlList = document.getElementsByTagName('a');

const showPath = () => {
    let counter = 0;
    return function (event) {
        counter++
        event.preventDefault()
        if (!item.textContent.includes(item.href)) {
            item.textContent += `(${item.href})`;
        }
        if (counter >= 3) {
            item.onclick = null;
        }
    }
}

for (let item of urlList) {
    item.onclick = showPath();
}