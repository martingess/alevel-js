//14. Дан ol. По нажатию на кнопку получите его последнего потомка и удалите его.

const btn = document.getElementById("deleteButton");
const ol = document.getElementsByTagName("ol")[0];
btn.onclick = () => {
    ol.lastElementChild.remove()
}