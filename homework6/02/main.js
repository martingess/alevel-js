//2. Дан ol. Через 3 секунды получите его последнего потомка и удалите его.
var ol = document.querySelector('ol');
setTimeout(() => {
    ol.lastElementChild.remove()
}, 3000)